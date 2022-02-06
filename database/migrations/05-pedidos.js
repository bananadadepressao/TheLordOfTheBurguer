module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable(
            'pedidos',
            {
                id: { 
                    type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                    primaryKey: true, 
                    autoIncrement: true, 
                    allowNull: false 
                },        
                id_hamburgueria: {
                    type: Sequelize.DataTypes.INTEGER.UNSIGNED,
                    allowNull: false
                },
                createdAt: Sequelize.DataTypes.DATE,
                updatedAt: Sequelize.DataTypes.DATE,
                deletedAt: Sequelize.DataTypes.DATE
            }
        )
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('pedidos')
    }
};