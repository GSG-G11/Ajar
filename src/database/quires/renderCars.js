const connection = require('../config/connection');

const renderCarsDB = () => connection.query('SELECT * FROM cars;');
module.exports = renderCarsDB;
