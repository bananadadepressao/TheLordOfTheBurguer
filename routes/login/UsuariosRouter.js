var express = require('express');
var router = express.Router();
var UsuariosController = require("../../controllers/UsuariosController");

/* GET home page. */
router.get('/', UsuariosController.cadastrar);
router.post('/cadastro', UsuariosController.acaoCadastrar);
router.get('/editar/:id', UsuariosController.editar);
router.post('/editar:id', UsuariosController.acaoEditar);
router.get('/excluir:id', UsuariosController.excluir);


module.exports = router;
