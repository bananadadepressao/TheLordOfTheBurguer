const db = require("../database/models");

const LancheController = {
    listar: async (req, res) => {
        const lanches = await db.Lanche.findOne();

        res.render("admin/lanche", { lanches: lanches});
        console.log("execução bem sucedida ..........................");
    },
    cadastrar: (req,res) => {
        res.render("admin/cadastrar", { 
            formAction:"/admin/lanche/cadastrar", 
            buttonMessage: "Cadastrar", 
            lanche:{} 
        })
            console.log("execução bem sucedida  CADASTRAR !!!!!!!!!!!!!!!!!!!!!!");

    },
    acaoCadastrar: async (req, res) => {
        const lanche = req.body.lanche;

        await db.Lanche.create({ 
            lanche: lanche
        })
        res.redirect("/admin/lanche");
        console.log("execução bem sucedida  CADASTRAR !!!!!!!!!!!!!!!!!!!!!!");

    }

};


module.exports = LancheController;