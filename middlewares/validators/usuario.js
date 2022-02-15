const { check } = require('express-validator');

const createValidator =[
    check("name", "Requer Nome").notEmpty(),
    check("email", "Requer email@email").notEmpty().trim().escape(),
    check("senha", "Requer Senha com mínimo 6 caracteres").notEmpty().trim().escape().isLength({min: 6 }),

];

module.exports = {createValidator,};