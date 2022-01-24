module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario",{
        nome:  DataTypes.STRING(100),
        email: DataTypes.STRING(75),
        senha: DataTypes.STRING,
    }, {
        tableName: 'usuarios',
        timestamps: true,
    });

    return Usuario;
}