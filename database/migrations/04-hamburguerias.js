module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable(
        'hamburguerias',
       {
        id: { 
          type: Sequelize.DataTypes.INTEGER.UNSIGNED,
          primaryKey: true, 
          autoIncrement: true, 
          allowNull: false 
        },
        nome: { 
          type: Sequelize.DataTypes.STRING(100), 
          allowNull: false 
        },
        cnpj: {
            type: Sequelize.DataTypes.STRING(18),
            allowNull: false
        },
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('hamburguerias');
    }
};