const express = require('express');

const router = express.Router();

const { signUp, login ,deleteFromCart} = require('../controllers');

router.post('/signup', signUp);
router.post('/login', login);
router.put('/delete', deleteFromCart);

module.exports = { router };
