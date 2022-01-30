module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('itens', {
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
            type: Sequelize.DataTypes.STRING(45), 
            allowNull: false 
        },
        quantidade_minima: { 
            type: Sequelize.DataTypes.STRING(45), 
            allowNull: false 
        },
        tipo: { 
            type: Sequelize.DataTypes.STRING(45), 
            allowNull: false 
        },
        categoria: { 
            type: Sequelize.DataTypes.STRING(45), 
            allowNull: false 
        },
        id_lanches: { 
            type: Sequelize.DataTypes.INTEGER.UNSIGNED, 
            references: { model: 'lanches', key: 'id_lanches' } 
        },
        id_hamburgueria: { 
            type: Sequelize.DataTypes.INTEGER.UNSIGNED, 
            references: { model: 'hamburgueria', key: 'id_hamburgueria' 
        },
    },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    },
    down: async (queryInterface, Sequelize) => {
      return queryInterface.dropTable('itens');
    }
};