const connection = require('../config/connection');

const addToCartDB = (id , userId) => connection.query({
  text: 'UPDATE cars SET user_id = ($2) WHERE id =($1);',
  values: [ id, userId],
});

module.exports = addToCartDB;
