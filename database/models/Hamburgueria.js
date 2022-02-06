module.exports = (Sequelize, DataTypes) => {
    const Hamburgueria = Sequelize.define("Hamburgueria",
    {
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        cnpj: {
            type: DataTypes.STRING(18),
            allowNull: false
        }
    },
    {
        tableName: "hamburguerias",
        timestamps: false
    });
    return Hamburgueria;
}