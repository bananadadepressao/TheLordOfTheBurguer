const express = require("express");
const router = express.Router();
const CaixaController = require("../../controllers/CaixaController");

router.get('/', CaixaController.listar);

module.exports = router;