const { getMyCartDB } = require('../database/quires');

const getMyCart = (req, res) => {
  getMyCartDB(req.cookies.id)
    .then((cars) => res.json(cars.rows))
    .catch((err) => res.json('theres error'));
};

module.exports = getMyCart;
