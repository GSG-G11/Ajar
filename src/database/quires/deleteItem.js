const connection = require('../config/connection');

const deleteCar = (id) => {
  // eslint-disable-next-line radix
  const id2 = parseInt(id);
  return connection.query({
    text: 'UPDATE cars SET user_id = null WHERE id =($1);',
    values: [id2],
  });
};

module.exports = { deleteCar };
