var express = require('express');
var router = express.Router();
var UsuariosController = require("../../controllers/UsuarioController");
const {createValidator} = require('../../middlewares/validators/usuario')


router.get('/', UsuariosController.listar);

router.get('/cadastrar', UsuariosController.cadastrar);

router.post('/cadastrar',createValidator, UsuariosController.acaoCadastrar);

router.get('/editar/:id', UsuariosController.editar);

router.post('/editar/:id', UsuariosController.acaoEditar);

router.get('/excluir/:id', UsuariosController.excluir);


module.exports = router;