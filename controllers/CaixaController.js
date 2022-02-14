const CaixaController = {
    listar: (req, res) => {
        res.render("admin/caixa", {
            lanches: [
                {
                    id: 0,
                    nome: "BBB - Bacon and Barbecue Bitch",
                    description: "aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc dddddddddddddddddddddddd eeeeeeeeeeeeeeeeeeeee fffffffffff ggggggggggggggggggg hhhhhhhhhhhhhhh",
                    preco: 35.50
                },
                {
                    id: 0,
                    nome: "BBB - Bacon and Barbecue Bitch",
                    description: "aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc ddddddddd",
                    preco: 35.50
                },
                {
                    id: 0,
                    nome: "BBB - Bacon and Barbecue Bitch",
                    description: "aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc dddddddddddddddddddddddd eeeeeeeeeeeeeeeeeeeee fffffffffff ggggggggggggggggggg hhhhhhhhhhhhhhh",
                    preco: 35.50
                },
                {
                    id: 0,
                    nome: "BBB - Bacon and Barbecue Bitch",
                    description: "aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
                    preco: 35.50
                },
                {
                    id: 0,
                    nome: "BBB - Bacon and Barbecue Bitch",
                    description: "aaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc dddddddddddddddddddddddd eeeeeeeeeeeeeeeeeeeee fffffffffff ggggggggggggggggggg hhhhhhhhhhhhhhh",
                    preco: 35.50
                }
            ]
        });
    }
}

module.exports = CaixaController;