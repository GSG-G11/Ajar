const bcrypt = require('bcryptjs');
const insertUser = require('../database/quires/postUser');
const { signUpSchema } = require('../utilites/vaildation');
const jwt = require('jsonwebtoken');
const signUp = (req, res) => {
  const { username, email } = req.body;
  token = jwt.sign(username, 'secretkeyfromenvfile')
  signUpSchema
    .validateAsync(req.body)
    .then((resop) => bcrypt.hash(resop.password, 10))
    .then((hashedPassword) => insertUser(username, email, hashedPassword))
    .then((data) => res.status(201).cookie(usename, token).redirect('/'))
    .catch((err) => res.send(err.name));
};

module.exports = signUp;
