'use strict';

const express = require('express');
const app = express();

const messages = require('./routes/classifieds');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

console.log("before get in serverjs");

app.use('/classifieds', messages);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port', port);
  console.log("dinkydinky");
});

module.exports = app;
