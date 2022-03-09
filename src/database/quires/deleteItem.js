const connection = require('../config/connection');


const deleteCar = (user_id) => connection.query({
    text: 'SELECT  * FROM cars   WHERE id= ($1) ;',
    values: [user_id],
  }).then((type,image,price)=>connection.query({
    text: 'UPDATE cars SET id=NULL ,type = $2, image = $3, price = $4  WHERE user_id = ($1);',
    values: [type,image,price],
  })).then((user_id)=>connection.query({
    text: 'SELECT  * FROM cars   WHERE id= ($1) ;',
    values: [user_id],
  }));


  module.exports = deleteCar;
  