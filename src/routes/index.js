const express = require('express');

const router = express.Router();

const { signUp, login ,deleteCar} = require('../controllers');

router.post('/signup', signUp);
router.post('/login', login);
router.post('/delete', deleteCar);

module.exports = { router };
