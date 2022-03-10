/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { getUser } = require('../database/quires');
const { signInSchema } = require('../utilites/vaildation');

const login = (req, res) => {
  const { email, password } = req.body;
  signInSchema
    .validateAsync(req.body)
    .then((data1) => getUser(email))
    .then((result) => result.rows[0])
    .then((user) => {
      if (user === undefined) {
        res.status(400).json({
          msg: 'user doesnt exists',
        });
      } else {
        bcrypt.compare(password, user.password)
          .then((valid) => {
            if (!valid) {
              res.status(400).json({ msg: 'incorrect password' });
            } else {
              const token = jwt.sign(user.username, 'secretkeyfromenvfile');
              res.cookie('id', user.id);
              res.cookie('name', user.username);
              res.cookie('id', user.id);
              res.status(200).cookie('token', token).json({ redirect: '/' });
            }
          });
      }
    })
    .catch((err) => res.status(400).json({ msg: err.message }));
};
module.exports = login;
