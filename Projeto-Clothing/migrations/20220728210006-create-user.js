'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      cpf: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.STRING(20),
        allowNull: false,

      },
      telefone: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      foto: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      admin: {
        type: Sequelize.BOOLEAN,

      },
      data_criacao: {
        type: Sequelize.DATETIME,
      },
      carrinho_produto_id: {
        type: Sequelize.INTEGER(11),
        foreignKey: true,
      },

    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};
