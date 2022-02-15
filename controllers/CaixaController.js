const { map } = require("../app");
const { Sequelize } = require("../database/models");
const db = require("../database/models");

const CaixaController = {
    listar: async (req, res) => {
        var lanches = [];

        db.Lanche.findAll({ where: {id_hamburgueria: req.session.TheLordOfTheBurguerAdminUser.id_hamburgueria}}).then((e) => {
            e.forEach((item) => {
                lanches.push(item.dataValues);
            });
            res.render("admin/caixa", {lanches: lanches});
        });
    },

    atualizar: async (req, res) => {
        console.log(req.body);

        var pedido = JSON.parse(req.body.pedido);

        pedido.forEach(async (lanche) => {
            lanche.ing.forEach(async (item) => {
                const itemBD = await db.Estoque.findOne({ where: {id: item}});

                const newQt = itemBD.dataValues.quantidade - lanche.qt;

                await db.Estoque.update({quantidade: newQt}, { where: { id: item }});
            });
        });
    
        res.redirect("/admin/caixa");
    }
}

module.exports = CaixaController;