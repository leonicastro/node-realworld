const express = require('express');

const app = express();

const indexRoute = require('./app/routes/index.route');

app.use('/', indexRoute);

module.exports = app;
