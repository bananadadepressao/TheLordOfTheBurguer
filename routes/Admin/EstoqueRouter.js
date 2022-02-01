var express = require('express');
var router = express.Router();
var EstoqueController = require("../../controllers/EstoqueController");

router.use('/', EstoqueController.listar);



module.exports = router;
