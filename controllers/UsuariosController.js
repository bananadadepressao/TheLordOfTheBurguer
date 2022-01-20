const db = require("../database/models");
const bcrypt = require("bcrypt");

const UsuariosController = {
    cadastrar: async (req, res) => {
       const usuarios = await db.Usuario.findAll();
        res.render("login/cadastro", {usuarios});
    },
    acaoCadastrar: async  (req, res) => {
        const salt = bcrypt.genSaltSync(10);
        const senhaCriptografada = bcrypt.hashSync(req.body.senha, salt);

        const usuarios = {
            nome: req.body.nome,
            email: req.body.email,
            senha: senhaCriptografada
        }

        await db.Usuario.create(usuarios);

        res.render("login/cadastro");

    },
    editar: (req, res) => {
        res.render("login/listaUsuarios")

    },
    acaoEditar: (req, res) => {
        res.render("login/listaUsuarios")

    },
    excluir: (req, res) => {
        res.render("login/listaUsuarios")

    },

};

module.exports = UsuariosController;