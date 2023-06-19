const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('ok');
})

app.post('/api/:id', (req, res) => {
  console.log('req.body=', req.body)
  console.log('req.headers=', req.headers)
  console.log('req.query=',req.query)
  console.log('req.params', req.params)
  res.status(200).send('POST /api works');
})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})