module.exports = (sequelize, DataTypes) => 
{
    const Lanches = sequelize.define(
        "Lanches",
    {
        nome: DataTypes.STRING(75),
        descricao: DataTypes.TEXT
    }, 
    {
        tableName: 'lanches',
        timestamps: true
    });

 

    return Lanches;
}