module.exports = (sequelize, DataTypes) => {
    const Itens = sequelize.define(
        "Itens",
    {
        nome:  DataTypes.STRING(45),
        quantidade: DataTypes.INTEGER.UNSIGNED,
        quantidade_minima: DataTypes.INTEGER.UNSIGNED,
        tipo: DataTypes.STRING(45),
        categoria: DataTypes.STRING(45),

    }, {
        tableName: 'itens',
        timestamps: true,
    });

    Itens.associate = (models) => {
        Itens.hasOne(models.Lanches, 
            { as: "lanches", foreignKey: "id_lanches" }
            );
    /*    Itens.hasOne(models.Hamburgueria, 
            { as: "hamburgueria", foreignKey: "id_hamburgueria" }
            );
    */
    }

    return Itens;
}