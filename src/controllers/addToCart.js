const addToCartDB = require('../database/quires/addToCartDB');

const addToCart = (req, res) => {
   console.log(req.body);
  addToCartDB(req.body.carId, req.body.userId)
    .then((results) => res.json('added to cart successfully'))
    .catch((err) => res.json({ msg: 'can not update' }));
};

module.exports = addToCart;
