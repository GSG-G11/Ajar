const connection = require('../config/connection');

const getUser = (email) => connection.query({
  text: 'SELECT * FROM users WHERE email = ($1);',
  values: [email],
});
module.exports = getUser;
