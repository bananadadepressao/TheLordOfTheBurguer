const db = require("../database/models");
const bcrypt = require("bcrypt");


const UsuariosController = {
listar: async (req, res) => {
      const usuarios = await db.Usuario.findAll();
      res.render("admin/usuarios/index", { usuarios: usuarios });
},
cadastrar: (req,res) => {
    res.render("admin/usuarios/form",{
        formAction: "/admin/usuarios/cadastrar",
        buttonMessage: "Cadastrar",
        usuario: {}

    });
},
acaoCadastrar: async (req, res) => {
    const senhaCriptografada = bcrypt.hashSync(req.body.senha, 12);

    const usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCriptografada,
    }

    await db.Usuario.create(usuario);

    res.redirect("usuarios");
},
editar: async (req, res) => {
    const usuario = await db.Usuario.findByPk(req.params.id)
    res.render("admin/usuarios/form", {
        formAction: `/admin/usuarios/editar/${req.params.id}`, //template string
        buttonMessage: "Atualizar",
        usuario: usuario
    });
},
acaoEditar: async (req, res) => {
    const usuario = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
    }

    await db.Usuario.update(usuario, { where: { id: req.params.id } });

    res.redirect("/admin/usuarios");
},
excluir: async (req, res) => {
    await db.Usuario.destroy({ where: { id: req.params.id } });
    res.redirect("/admin/usuarios");
},
};
module.exports = UsuariosController;