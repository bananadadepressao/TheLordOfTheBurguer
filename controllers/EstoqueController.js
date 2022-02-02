const db = require("../database/models");

const EstoqueController = {
    listar: async (req, res) => {
        const estoques = await db.Estoque.findAll();
          res.render("admin/estoque/editarEstoque");
    },
    
    
    editar: async (req, res) => {
        const estoque = await db.Estoque.findByPk(req.params.id)
        res.render("admin/estoque/editarEstoque", {
            formAction: `/admin/estoque/editar/${req.params.id}`, //template string
            buttonMessage: "Atualizar",
            estoque: estoque
        });
    },
    acaoEditar: async (req, res) => {
        const estoque = {
            nome: req.body.nome,
      
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