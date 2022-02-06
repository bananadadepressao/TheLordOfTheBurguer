var express = require('express');
var router = express.Router();
const HamburgueriaController = require('../controllers/HamburgueriaController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('registerSupply');
});

router.get('/cadastro', function(req, res, next) {
  res.render('novoCliente');
});

router.post('/cadastro', HamburgueriaController.cadastrar);

module.exports = router;
