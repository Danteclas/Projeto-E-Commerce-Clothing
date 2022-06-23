'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users',{
      id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
              },
      email: {
                type: Sequelize.STRING(100),
                unique: true,
                      },
    })
  },

  async down (queryInterface, Sequelize) {
  //dropar a tabela acima desfazendo a tabela.
     await queryInterface.dropTable('users');
  
  }
};
