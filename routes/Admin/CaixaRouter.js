const express = require("express");
const router = express.Router();
const CaixaController = require("../../controllers/CaixaController");

router.get('/', CaixaController.listar);

router.put('/pedido', CaixaController.atualizar);

module.exports = router;