var express = require('express');
var router = express.Router();
var CadastrarEstoqueController = require("../../controllers/CadastrarEstoqueController");

router.get('/', CadastrarEstoqueController.listar);
router.get('/cadastrar', CadastrarEstoqueController.cadastrar);
router.post('/cadastrar', CadastrarEstoqueController.acaoCadastrar);


module.exports = router;