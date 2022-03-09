const { deleteCar } = require('../database/quires');

const deleteFromCart = (req, res) => {
  const id = req.body;
  deleteCar(req.body.id)
    .then((data) => res.json({ msg: 'car deleted sucsessfully' }))
    .catch(err=> res.json(err));
};

module.exports = deleteFromCart;
