module.exports = (sequelize, DataTypes) => 
{
    const Lanche = sequelize.define(
        "Lanche",
    {
        nome: DataTypes.STRING(75),
        descricao: DataTypes.TEXT,
        preco: DataTypes.DOUBLE.UNSIGNED,
        itens: DataTypes.JSON,
        id_hamburgueria: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }, 
    {
        tableName: 'lanches',
        timestamps: true
    });

    /*Lanche.associate = ((models) => {
        Lanche.belongsToMany(models.Estoque, {
            as: "ingredientesUtilizados",
            through: "lanches_itens",
            foreignKey: "lanche_id",
            otherKey: "item_id",
        })
    });*/

    /*Lanche.associate = (models) => {
        Lanche.belongsTo(models.Hamburgueria, {
            alias: 'hamburgueria',
            foreignKey: "id_hamburgueria"
        })
    };*/

    return Lanche
}