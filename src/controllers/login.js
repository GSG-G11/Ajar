const bcrypt = require('bcryptjs');
const getUser = require('../database/quires');
const jwt = require('jsonwebtoken');
const login = (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign(username, 'secretkeyfromenvfile')
  getUser(email)
    .then((result) => {
      if (result.rows.length === 0) {
        return res.status(500).json('error');
      }
      return result.rows[0];
    })
    .then((user) => user.password)
    .then((hashedPass) => {
      bcrypt.compare(password, hashedPass, (err, isMatch) => {
        if (err) {
          res.status(500).json('from compair');
        } else {
          if (!isMatch) {
            res.status(401).json('error from not match');
          } else {
            res.status(200).cookie("usename", token).redirect('/');
          }
        }
      });
    })
    .catch((err) => console.log(err));
};
module.exports = login;
