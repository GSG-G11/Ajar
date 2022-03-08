/* eslint-disable max-len */
const bcrypt = require('bcryptjs');
const getUser = require('../database/quires');

const compare = (password, hashed, callback) => {
  bcrypt.compare(password, hashed, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  getUser(email)
    .then((result) => result.rows[0])
    .then((user) => user.password)
    .then((hashedPass) => {
      compare(password, hashedPass, (err, isMatch) => {
        if (err) {
          res.status(500).redirect('/login');
        } else {
          res.status(200).redirect('/');
        }
      });
    })
    .catch((err) => console.log(err));
};
module.exports = login;
