module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'lanches',
       {
        id: {
          type: Sequelize.DataTypes.INTEGER.UNSIGNED, 
          primaryKey: true, 
          autoIncrement: true, 
          allowNull: false 
        },
        nome: { 
          type: Sequelize.DataTypes.STRING(75), 
          allowNull: false 
        },
        preco: {
          type: Sequelize.DataTypes.DOUBLE.UNSIGNED,
          allowNull: false
        },
        itens: {
          type: Sequelize.DataTypes.JSON,
          allowNull: false
        },
        descricao: {
          type: Sequelize.DataTypes.TEXT, 
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
      return queryInterface.dropTable('lanches');
    }
};