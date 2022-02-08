const db = require("../database/models");

const EstoqueController = {
    listar: async (req, res) => {
        const estoques = await db.Estoque.findAll();
          res.render("admin/estoque/editarEstoque",{ estoques: estoques });
    },

    cadastrar: (req,res) => {
        console.log("cheguei no cadastrar <<<<<<<<<<<<<<<<<<<<<<<<<<r");
       res.render("admin/estoque/cadastrar",{
           
           estoque: {}
       
       });
   },

   acaoCadastrar: async (req, res) => {
       console.log('DADOS DO REQ ESTOQUE <<<<<<<<<<<<<<');
       console.log(req.body);
   
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
    
    editar: async (req, res) => {
        console.log("abriu o editar<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");

        const estoque = await db.Estoque.findByPk(req.params.id)
        console.log(estoque);

        res.redirect("admin/estoque/form/cadastrar", {
            formAction: `/admin/estoque/editar/${req.params.id}`,//template string
            buttonMessage: "Editar",
            estoque: estoque
        });
    },

    acaoEditar: async (req, res) => {
        const estoque = {
            nome: req.body.item,
            quantidade: req.body.quantidade,
            quantidade_minima: req.body.quantidade_minima,
            tipo: req.body.tipo,
            categoria: req.body.categoria
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