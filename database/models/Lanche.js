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

    Lanches.associate = (models) => {
        Lanches.hasMany(models.Estoque, { as: "estoque", foreignKey: "id_estoque" });
    }  

    return Lanches;
}