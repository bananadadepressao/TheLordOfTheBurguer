var express = require("express");
var router = express.Router();
const CardapioController = require('../../controllers/CardapioController');

router.get('/', CardapioController.listar)

router.get('/cadastrar', CardapioController.cadastrar);
router.get('/cadastrar/:id', CardapioController.cadastrar);

module.exports = router;