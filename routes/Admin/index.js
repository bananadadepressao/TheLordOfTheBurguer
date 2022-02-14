var express = require('express');
const { route } = require('../../app');
var router = express.Router();
var UsuariosRouter = require ("./UsuariosRouter");
var EstoqueRouter = require ("./EstoqueRouter");
var CardapioRouter = require("./CardapioRouter");
var CaixaRouter = require("./CaixaRouter");

var autenticacaoMiddleware = require("../../middlewares/autenticacaoMiddleware");

router.use(autenticacaoMiddleware);

router.use('/caixa', CaixaRouter);

router.use('/estoque', EstoqueRouter);

router.use("/cardapio", CardapioRouter);

router.use("/usuarios",UsuariosRouter);

module.exports = router;
