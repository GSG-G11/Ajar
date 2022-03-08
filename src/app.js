const cookieParser = require('cookie-parser');
const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);

app.use(express.static('public'));

// app.use(router);

module.exports = app;
