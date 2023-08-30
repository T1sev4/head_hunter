const express = require('express');
const router = express.Router();
const {createApply, getEmployeeApplies} = require('./controllers');
const {isEmployee} = require('../auth/middlewares');
const passport = require('passport')
const {validateApply} = require('./middlewares')

router.post('/api/applies', passport.authenticate('jwt', { session: false }), isEmployee, validateApply, createApply); 
router.get('/api/applies/employee', passport.authenticate('jwt', { session: false }), isEmployee, getEmployeeApplies); 



module.exports = router;