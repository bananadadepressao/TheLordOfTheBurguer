const db = require("../database/models");
const bcrypt = require("bcrypt");

const HamburgueriaController = {
    cadastrar: async(req, res) => {

        console.log(req.body);

        if(req.body.nomeEstabelecimento != null && req.body.cnpj != null && req.body.nomeAdm != null
            && req.body.email != null && req.body.senha != null){
            const hamburgueria = {
                nome: req.body.nomeEstabelecimento,
                cnpj: req.body.cnpj,
            };
            const resultDBBurguer = await db.Hamburgueria.create(hamburgueria);
            
            if(resultDBBurguer.id != null && resultDBBurguer.id > 0){
                const senhaAdm = bcrypt.hashSync(req.body.senha, 8);

                const user = {
                    nome: req.body.nomeAdm,
                    email: req.body.email,
                    senha: senhaAdm,
                    id_hamburgueria: resultDBBurguer.id,
                }

                const resultDBUser = await db.Usuario.create(user);

                console.log(resultDBUser.toJSON());
            }
        } else{
            console.log('FALHOU NO CADASTRO DA HAMBURGUERIA <<<<<<<<<<<<<<');
        }

        res.redirect('/login');
    }
}

module.exports = HamburgueriaController;