const db = require("../database/models");

const EstoqueController = {
    listar: async (req, res) => {
          
          res.render("admin/estoque/form");
    },
}

module.exports = EstoqueController;