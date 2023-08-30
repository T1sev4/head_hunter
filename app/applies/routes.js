const express = require('express');
const router = express.Router();
const {createApply, getEmployeeApplies, deleteApply} = require('./controllers');
const {isEmployee} = require('../auth/middlewares');
const passport = require('passport')
const {validateApply, isAuthorOfApply} = require('./middlewares')

router.post('/api/applies', passport.authenticate('jwt', { session: false }), isEmployee, validateApply, createApply); 
router.get('/api/applies/employee', passport.authenticate('jwt', { session: false }), isEmployee, getEmployeeApplies); 
router.delete('/api/applies/:id', passport.authenticate('jwt', { session: false }), isEmployee, isAuthorOfApply, deleteApply); 



module.exports = router;