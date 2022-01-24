var express = require('express');
var router = express.Router();
var LoginController = require("../../controllers/LoginController");

router.get("/login", LoginController.login);
router.post("/login", LoginController.loginAcao);
router.get("/logout", LoginController.logout);


module.exports = router;
