var express = require('express');
var router = express.Router();
var EstoqueController = require("../../controllers/EstoqueController");
console.log('cheguei no estoque router <<<<<<<<<<<<>>>>>>>>>>>>>>')

router.get('/', EstoqueController.listar);

router.get('/cadastrar', EstoqueController.cadastrar);
//router.get('/', CadastrarEstoqueController.listar);
router.post('/cadastrar', EstoqueController.acaoCadastrar);

router.get('/editar', EstoqueController.editar);
router.post('/editar/:id', EstoqueController.acaoEditar);
router.get('/excluir/:id', EstoqueController.excluir);

module.exports = router;
