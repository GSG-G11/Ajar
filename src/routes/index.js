const express = require('express');

const router = express.Router();

const {
  signUp, login, deleteFromCart, addToCart, renderCars,
} = require('../controllers');

router.post('/signup', signUp);
router.post('/login', login);
router.get('/cars', renderCars);
router.get('/myCart', addToCart);
router.put('/delete', deleteFromCart);

module.exports = { router };
