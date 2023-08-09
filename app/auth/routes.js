const express = require('express');
const router = express.Router();
const {sendVerificationEmail, verifyCode, signUp} = require('./controllers');
const {validateSignUp} = require('./middlewares')

router.post('/api/auth/sendmail', sendVerificationEmail); 
router.post('/api/auth/verifycode', verifyCode); 
router.post('/api/auth/signup', validateSignUp, signUp); 



module.exports = router;