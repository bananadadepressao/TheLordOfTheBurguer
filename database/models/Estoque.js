module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define(
        "Estoque",
    {
        nome:  DataTypes.STRING(45),
        quantidade: DataTypes.INTEGER.UNSIGNED,
        quantidade_minima: DataTypes.INTEGER.UNSIGNED,
        categoria: DataTypes.STRING(45),
        ultima_atualizacao: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        id_hamburgueria: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }, {
        tableName: 'estoques',
        timestamps: true,
    });

    return Estoque;
}



