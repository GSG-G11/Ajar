const renderCarsDB = require('../database/quires/renderCars');

const renderCars = (req, res) => {
  renderCarsDB().then((cars) => res.json(cars.rows));
};

module.exports = renderCars;
