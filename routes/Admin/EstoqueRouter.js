var express = require('express');
var router = express.Router();
var EstoqueController = require("../../controllers/EstoqueController");

router.use('/', EstoqueController.listar);

router.get('/editar/:id', EstoqueController.editar);
router.post('/editar/:id', EstoqueController.acaoEditar);
router.get('/excluir/:id', EstoqueController.excluir);



module.exports = router;
