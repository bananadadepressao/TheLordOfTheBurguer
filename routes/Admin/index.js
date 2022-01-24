var express = require('express');
var router = express.Router();
var UsuariosRouter = require ("./UsuariosRouter");

/* esta index será Tela - Seleção de Pedido  */
router.get('/', function(req, res, next) {
  res.render('admin/index');        
});

router.use("/usuarios",UsuariosRouter);

module.exports = router;
