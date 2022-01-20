var express = require('express');
var router = express.Router();
var UsuariosRouter = require('./UsuariosRouter')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login');
});

router.use('/cadastro', UsuariosRouter);

router.get('/listaUsuarios', function(req, res, next) {
  res.render('login/listaUsuarios');
});
module.exports = router;
