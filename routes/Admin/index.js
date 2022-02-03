var express = require('express');
const { route } = require('../../app');
var router = express.Router();
var UsuariosRouter = require ("./UsuariosRouter");
var EstoqueRouter = require ("./EstoqueRouter");
var CadastrarEstoqueRouter = require ("./CadastrarEstoqueRouter");

var autenticacaoMiddleware = require("../../middlewares/autenticacaoMiddleware");

router.use(autenticacaoMiddleware);
/* esta index será Tela - Seleção de Pedido  */
router.get('/', function(req, res, next) {
  res.render('admin/index');        
});

router.get('/estoque',EstoqueRouter);
router.use('/estoque/form',CadastrarEstoqueRouter);


router.use("/usuarios",UsuariosRouter);





module.exports = router;
