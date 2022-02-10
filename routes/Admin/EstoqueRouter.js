var express = require('express');
var router = express.Router();
var EstoqueController = require("../../controllers/EstoqueController");

router.get('/', EstoqueController.listar);

router.get('/cadastrar', EstoqueController.cadastrar);

router.get('/cadastrar/:id', EstoqueController.cadastrar);

router.post('/cadastrar', EstoqueController.acaoCadastrar);

router.put('/atualizar/:id', EstoqueController.atualizarItem);

router.delete('/excluir/:id', EstoqueController.excluir);

module.exports = router;