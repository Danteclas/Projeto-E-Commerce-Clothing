'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('estoque', {

      estoque_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,

      },

      qtd_total_estoque: {
        type: Sequelize.INTEGER,


      },
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('estoque');

  }
};
