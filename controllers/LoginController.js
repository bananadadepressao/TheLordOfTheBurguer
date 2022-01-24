const db = require("../database/models");
const bcrypt = require("bcrypt");

const LoginController = {
    login: (req, res) => {
        res.render("admin/login",{ login:"cadastro"});
    },
    loginAcao: async (req, res) => {
        const { email, senha } = req.body;

        const  acessoLivreDS = await db.Usuario.findOne({ where: { email: email} });
        if(acessoLivreDS == null){
            res.redirect("/admin/login")
        }

        const acessoLivre = acessoLivreDS.dataValues;
        if(!bcrypt.compareSync(senha, acessoLivre.senha)){
            res.redirect("/admin/login")

        }
        req.session.TheLordOfTheBurguerAdminUser = acessoLivre;
        res.redirect("/admin/");
    },
    logout: (req, res) => {
        req.session.destroy();
        res.redirect("/login");
    },
};


    module.exports = LoginController;