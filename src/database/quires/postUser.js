const connection = require('../config/connection');

const insertUser = (username, email, hashedPW) => connection.query({
  text: 'INSERT INTO users (username, email, password) VALUES ( $1, $2 ,$3 ) RETURNING *;',
  values: [username, email, hashedPW],
});
module.exports = insertUser;
