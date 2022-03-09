const signUp = require('./signup');
const login = require('./login');
const deleteFromCart = require('./deletefromCart');
const addToCart = require('./addToCart');
const logout = require('./logout');
const renderCars = require('./renderCar');
const routProtector = require('./routeProtector');

module.exports = {
  signUp, login, addToCart, logout, deleteFromCart, renderCars, routProtector,
};
