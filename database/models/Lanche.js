module.exports = (sequelize, DataTypes) => 
{
    const Lanche = sequelize.define(
        "Lanche",
    {
        nome: DataTypes.STRING(75),
        descricao: DataTypes.TEXT,
        id_hamburgueria: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }, 
    {
        tableName: 'lanches',
        timestamps: true
    });

    Lanche.associate = (models) => {
        Lanche.belongsTo(models.Hamburgueria, {
            alias: 'hamburgueria',
            foreignKey: "id_hamburgueria"
        })
    };

    return Lanche
}