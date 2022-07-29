'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fabricante', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRINGS,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRINGS,
        allowNull: false,
      },
      telefone: {
        type: Sequelize.STRINGS,
        allowNull: false,
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        foreignKey: true,
      },

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('fabricante');

  }
};
