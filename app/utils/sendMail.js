const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

// Настройка транспорта для отправки email через Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // ваш адрес электронной почты Gmail
    pass: 'your-password', // ваш пароль от почты Gmail
  },
});

// Маршрут для отправки email
function sendMail(to, subject, text) {
  // Параметры email сообщения
  const mailOptions = {
    from: 'your-email@gmail.com', // от кого
    to: 'recipient@example.com', // кому
    subject: 'Тема письма',
    text: 'Привет, это текст email сообщения!',
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