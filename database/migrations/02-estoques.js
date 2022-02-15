module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('estoques', 
      {
        id: { 
            type: Sequelize.DataTypes.INTEGER.UNSIGNED,
            primaryKey: true, 
            autoIncrement: true, 
            allowNull: false 
        },
        nome: { 
            type: Sequelize.DataTypes.STRING(45), 
            allowNull: false 
        },
        quantidade: { 
            type: Sequelize.DataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        quantidade_minima: { 
            type: Sequelize.DataTypes.INTEGER.UNSIGNED,
            allowNull: false 
        },
        ultima_atualizacao: {
            type: Sequelize.DataTypes.DATEONLY,
            allowNull: false
        },
        categoria: { 
            type: Sequelize.DataTypes.STRING(45), 
            allowNull: false 
        },
        id_hamburgueria: {
            type: Sequelize.DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('estoques');
    }
};