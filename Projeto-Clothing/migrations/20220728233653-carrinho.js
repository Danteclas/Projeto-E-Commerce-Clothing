'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carrinho', {

      produto_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,

      },
      usuario_id: {
        type: Sequelize.STRING,
        foreignKey: true,

      },

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('carrinho');

  }
};
