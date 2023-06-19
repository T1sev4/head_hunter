const express = require('express');
const nodemailer = require('nodemailer');

const userEmail = 'ostintimberlake@gmail.com'
const passwordGmail = 'asgbkyswuiqyfhna';



// Настройка транспорта для отправки email через Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: userEmail, // ваш адрес электронной почты Gmail
    pass: passwordGmail, // ваш пароль от почты Gmail
  },
});

// Маршрут для отправки email
function sendMail(to, subject, text) {
  // Параметры email сообщения
  const mailOptions = {
    from: userEmail, // от кого
    to: to, // кому
    subject: subject,
    text: text,
  };

  // Отправка email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('Ошибка отправки email');
    } else {
      console.log('Email отправлен: ' + info.response);
      res.send('Email успешно отправлен');
    }
  });
};

module.exports = sendMail