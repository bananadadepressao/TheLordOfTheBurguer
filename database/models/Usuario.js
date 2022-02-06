module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario",{
        nome:  DataTypes.STRING(100),
        email: DataTypes.STRING(75),
        senha: DataTypes.STRING,
        id_hamburgueria: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    }, 
    {
        tableName: 'usuarios',
        timestamps: true,
    });

    Usuario.associate = (models) => {
        Usuario.belongsTo(models.Hamburgueria, {
            alias: "hamburgueria",
            foreignKey: "id_hamburgueria"
        })
    };

    return Usuario;
}