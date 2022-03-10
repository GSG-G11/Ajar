/* eslint-disable camelcase */
const addToCartBtnDB = require('../database/quires/addtoCartBtnDB');

const addToCartBtn = (req, res) => {
  const { id, user_id } = req.body;
  addToCartBtnDB(user_id, id)
    .then((res) => res.json({ massage: 'Added To Cart' }))
    .catch(err => console.log(err));
};

module.exports = addToCartBtn;
