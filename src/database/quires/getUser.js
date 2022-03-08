const connection = require('../config/connection');

const getUser = (email) => connection.query({
  text: 'SELECT * FROM users WHERE email = ($1);',
  value: [email],
});

module.exports = getUser;
