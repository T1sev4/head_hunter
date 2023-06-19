const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded());
app.use(express.json());

app.use(require('./app/auth/routes'));

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})