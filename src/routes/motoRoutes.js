const express = require('express');
const router = express.Router();

const motoController = require('../controllers/motoController');

router.post('/', motoController.criarMoto)

module.exports = router;