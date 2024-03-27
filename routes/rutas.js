const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

//estas son las rutas de nuestro CRUD

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);

module.exports = router;
