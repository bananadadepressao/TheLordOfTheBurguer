var express = require('express');
var router = express.Router();
var LancheController = require("../../controllers/LancheController");

router.get('/', LancheController.listar);
router.get('/cadastrar', LancheController.cadastrar);
router.post('/cadastrar', LancheController.acaoCadastrar);

module.exports = router;