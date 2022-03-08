const res = require('express/lib/response');
const carsDom = require('./dom');

fetch('/login')
  . then((data) => res.json(data))
  . then((cars) => {
    carsDom(cars);
  });
