const express = require('express');
const router = express.Router();
const {createResume, getMyResumes, getResume} = require('./controllers');
const {isEmployee} = require('../auth/middlewares');
const passport = require('passport')
const {validateResume} = require('./middlewares')

router.post('/api/resume', passport.authenticate('jwt', { session: false }), isEmployee, validateResume ,createResume); 
router.get('/api/resume', passport.authenticate('jwt', { session: false }), isEmployee, getMyResumes);
router.get('/api/resume/:id', passport.authenticate('jwt', { session: false }), getResume);


module.exports = router; 