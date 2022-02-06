module.exports = (Sequelize, DataTypes) => {
    const Pedido = Sequelize.define("Pedido",
    {
        id_hamburgueria: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    },
    {
        tableName: "pedidos",
        timestamps: true
    }
    );

    Pedido.associate = (models) => {
        Pedido.belongsTo(models.Hamburgueria, {
            as: "hamburgueria",
            foreignKey: "id_hamburgueria"
        })
    };

    return Pedido;
}