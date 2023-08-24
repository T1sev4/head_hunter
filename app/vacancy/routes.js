const express = require('express');
const router = express.Router();
const {getExperiences, createVacancy, getMyVacancies, getVacancy, deleteVacancy} = require('./controllers');
const passport = require('passport')
const {isManager} = require('../auth/middlewares');
const {validateVacancy, isAuthOfVacancy} = require('./middlewares');

router.get('/api/experiences', getExperiences); 
router.post('/api/vacancy', passport.authenticate('jwt', { session: false }), isManager, validateVacancy,  createVacancy)
router.get('/api/vacancy', passport.authenticate('jwt', { session: false }), isManager, getMyVacancies)
router.get('/api/vacancy/:id', getVacancy)
router.delete('/api/vacancy/:id', passport.authenticate('jwt', { session: false }), isManager, isAuthOfVacancy, deleteVacancy)


module.exports = router;