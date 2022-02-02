const db = require("../database/models");


const CadastrarEstoqueController = {
    listar: async (req, res) => {
        const estoques = await db.Estoque.findAll();

          res.render("admin/estoque/cadastrar");
    },
    cadastrar: (req,res) => {
        res.render("admin/estoque/cadastrar",{
            formAction: "/admin/estoque/cadastrar",
            buttonMessage: "Cadastrar",
            estoque: {}
    
        });
    },
    acaoCadastrar: async (req, res) => {
        console.log(req.body)
    
        const usuario = {
            nome: req.body.nome,
          
        }
    
        await db.Usuario.create(estoque);
    
        res.redirect("/admin/estoque/cadastrar");
    },
};
module.exports = CadastrarEstoqueController;