const express = require('express');
const router = express.Router();
const {createResume} = require('./controllers');
const {isEmployee} = require('../auth/middlewares');
const passport = require('passport')
const {validateResume} = require('./middlewares')

router.post('/api/resume', passport.authenticate('jwt', { session: false }), isEmployee, validateResume ,createResume); 



module.exports = router; 