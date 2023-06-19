const express = require('express');
const router = express.Router();
const {sendVerificationEmail} = require('./controllers');
router.post('/api/auth/sendmail', sendVerificationEmail); 



module.exports = router;