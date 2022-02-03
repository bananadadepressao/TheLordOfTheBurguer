const db = require("../database/models");


const CadastrarEstoqueController = {
 listar: async (req, res) => {
 const estoques = await db.Estoque.findAll();
   res.render("admin/estoque/cadastrar",{ estoques: estoques });
 },
 cadastrar: (req,res) => {
     console.log("cheguei no cadastrar");
    res.render("admin/estoque/cadastrar",{
        formAction: "/admin/estoque/cadastrar",
        buttonMessage: "Cadastrar",
        estoque: {}
    
    });
},
acaoCadastrar: async (req, res) => {
    console.log("cadastrando item");
    console.log(req.body);
    
    const estoque = {
      nome: req.body.item,
      quantidade: req.body.quantidade,
      quantidade_minima: req.body.quantidade_minima,
      tipo: req.body.tipo,
      categoria: req.body.categoria
           
    }
    
    await db.Estoque.create(estoque);
    console.log(estoque)
    res.redirect("/admin/estoque/form/cadastrar");
    },
};
module.exports = CadastrarEstoqueController;