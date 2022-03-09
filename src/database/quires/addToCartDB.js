const connection = require('../config/connection');

const addToCartDB = (id) => connection.query({
  text: 'SELECT * FROM cars WHERE user_id = ($1);',
  values: [id],
});

module.exports = addToCartDB;
