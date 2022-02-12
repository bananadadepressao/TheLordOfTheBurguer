const db = require("../database/models");
const { Sequelize } = require("../database/models");
const Op = Sequelize.Op;

const CardapioController = {
    listar: (req, res) => {
        res.render('admin/cardapio/cardapio');
    },

    cadastrar: async (req,res) => {
        var itens = [];

        if(req.params.id != undefined){
            const lanche = await db.Lanche.findByPk(req.params.id);
            res.render("admin/cardapio/cadastrar",{ lanche: lanche });
        } else{
            db.Estoque.findAll({ where: {id_hamburgueria: req.session.TheLordOfTheBurguerAdminUser.id_hamburgueria}}).then((e) => {
                e.forEach((item) => {
                    itens.push(item.dataValues);
                });
                res.render("admin/cardapio/cadastrar",{ lanche: {}, ingredientes: itens});
            });
        }
   },
};

module.exports = CardapioController;