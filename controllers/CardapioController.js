const db = require("../database/models");
const { Sequelize } = require("../database/models");
const Op = Sequelize.Op;

const CardapioController = {
    listar: async (req, res) => {
        var lanches = [];

        if(req.query.search != undefined){
            const query = `%${req.query.search}%`; 
            
            db.Lanche.findAll({ where: {id_hamburgueria: req.session.TheLordOfTheBurguerAdminUser.id_hamburgueria, nome: {[Op.like]: query}}}).then((e) => {
                e.forEach((item) => {
                    lanches.push(item.dataValues);
                });
                res.render('admin/cardapio/cardapio',{ lanches: lanches });
            });
        } else{
            db.Lanche.findAll({ where: {id_hamburgueria: req.session.TheLordOfTheBurguerAdminUser.id_hamburgueria}}).then((e) => {
                e.forEach((item) => {
                    lanches.push(item.dataValues);
                });
                res.render('admin/cardapio/cardapio',{ lanches: lanches });
            });
        }
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

   acaoCadastrar: async (req, res) => {
       var itens = req.body;
       var chavesItens = Object.keys(req.body);
       var itensID = [];

       for(let i = 0; i < chavesItens.length; i++){
           let chave = `${chavesItens[i]}`;
           if(chave.substr(0,3) == "ing"){
               itensID.push(parseInt(itens[chave]));
           }
       }

        const lanche = {
            nome: req.body.lanche,
            id_hamburgueria: req.session.TheLordOfTheBurguerAdminUser.id_hamburgueria,
            descricao: req.body.description,
            preco: req.body.preco,
            itens: {
                ing: itensID,
            }
        }
    
        await db.Lanche.create(lanche);
        res.redirect("/admin/cardapio");
    },

    excluir: async (req, res) => {
        await db.Lanche.destroy({ where: { id: req.params.id } });
        res.redirect("/admin/cardapio");
    },
}

module.exports = CardapioController;