const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const insertUser = require('../database/quires/postUser');
const { signUpSchema } = require('../utilites/vaildation');

const signUp = (req, res) => {
  const { username, email, password } = req.body;
  const token = jwt.sign(username, 'secretkeyfromenvfile');
  signUpSchema
    .validateAsync(req.body)
    .then((resop) => bcrypt.hash(password, 10))
    .then((hashedPassword) => insertUser(username, email, hashedPassword))
    .then((data) => res.status(201).cookie('token', token).json({ redirect: '/' }))
    .catch((err) => {
      if (err.name === 'error') {
        res.status(400).json({ msg: 'email already exists' });
      } else {
        res.status(400).json({ msg: err.message });
      }
    });
};

module.exports = signUp;
