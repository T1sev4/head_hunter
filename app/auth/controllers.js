const sendMail = require('../utils/sendMail');
const sendVerificationEmail = (req, res) => {
  console.log(req.body);
  const code = 'HH' + Date.now();
  sendMail(req.body.email, "Код авторизации hh.kz", code)

  res.status(200).end();
}

module.exports = {sendVerificationEmail};