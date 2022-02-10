const { map } = require("../app");
const db = require("../database/models");

const EstoqueController = {
    listar: async (req, res) => {
        console.log(req.query.search);

        db.Estoque.findAll({ where: {id_hamburgueria: req.session.TheLordOfTheBurguerAdminUser.id_hamburgueria}}).then((e) => {
            var itens = [];
            e.forEach((item) => {
                itens.push(item.dataValues);
            });
            res.render("admin/estoque/editarEstoque",{ estoques: itens });
        });
    },

    cadastrar: async (req,res) => {
        if(req.params.id != undefined){
            const item = await db.Estoque.findByPk(req.params.id);
            res.render("admin/estoque/cadastrar",{ estoque: item });
        } else{
            res.render("admin/estoque/cadastrar",{ estoque: {} });
        }
   },

   acaoCadastrar: async (req, res) => {
       const estoque = {
         nome: req.body.item,
         quantidade: req.body.quantidade,
         quantidade_minima: req.body.quantidade_minima,
         categoria: req.body.categoria,
         ultima_atualizacao: req.body.ultima_compra,
         id_hamburgueria: req.session.TheLordOfTheBurguerAdminUser.id_hamburgueria,
       }
       
       await db.Estoque.create(estoque);
       console.log(estoque)
       res.redirect("/admin/estoque");
       },

    atualizarItem: async (req, res) => {
        const estoque = {
            nome: req.body.item,
            quantidade: req.body.quantidade,
            quantidade_minima: req.body.quantidade_minima,
            categoria: req.body.categoria,
            ultima_atualizacao: req.body.ultima_compra,
        }
    
        await db.Estoque.update(estoque, { where: { id: req.params.id } });
    
        res.redirect("/admin/estoque");
    },

    excluir: async (req, res) => {
        await db.Estoque.destroy({ where: { id: req.params.id } });
        res.redirect("/admin/estoque");
    },
    
}

module.exports = EstoqueController;