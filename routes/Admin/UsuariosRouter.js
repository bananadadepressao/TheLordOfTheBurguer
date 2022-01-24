var express = require('express');
var router = express.Router();
var UsuariosController = require("../../controllers/UsuarioController");


router.get('/', UsuariosController.listar);
router.get('/cadastrar', UsuariosController.cadastrar);
router.post('/cadastrar', UsuariosController.acaoCadastrar);
router.get('/editar/:id', UsuariosController.editar);
router.post('/editar/:id', UsuariosController.acaoEditar);
router.get('/excluir/:id', UsuariosController.excluir);


module.exports = router;
