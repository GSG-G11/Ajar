const connection = require('../config/connection');

const addToCartBtnDB = (user_id, id) => connection.query({
  text: 'UPDATE cars SET user_id = ($2) WHERE id = ($1);',
  values: [id, user_id],
});

module.exports = addToCartBtnDB;
