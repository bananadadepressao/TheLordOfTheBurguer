module.exports = (sequelize, DataTypes) => {
    const Estoque = sequelize.define(
        "Estoque",
    {
        nome:  DataTypes.STRING(45),
        quantidade: DataTypes.INTEGER.UNSIGNED,
        quantidade_minima: DataTypes.INTEGER.UNSIGNED,
        tipo: DataTypes.STRING(45),
        categoria: DataTypes.STRING(45)
        
    }, {
        tableName: 'estoques',
        timestamps: true,
    });

    return Estoque;
}



