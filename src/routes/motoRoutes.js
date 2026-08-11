const express = require('express');
const router = express.Router();

const motoController = require('../controllers/motoController');

router.post('/', motoController.criarMoto);
router.get('/', motoController.listarMotos);
router.get('/:id', motoController.buscarMotoPorID);
router.put('/:id', motoController.atualizarMoto);
router.delete('/:id', motoController.deletarMoto);

module.exports = router;