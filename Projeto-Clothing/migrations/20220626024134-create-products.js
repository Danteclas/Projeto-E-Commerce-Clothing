'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('products', {
      produto_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome_produto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tamanho: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      categoria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      preco_oferta: {
        type: Sequelize.FLOAT,
        allowNull: true,
        foreignKey: true,
      },

      carrinho_produto: {
        type: Sequelize.INTEGER(11),
        foreignKey: true,

      },
      fabricante_id_fabricante: {
        type: Sequelize.INTEGER(11),
        foreignKey: true,

      },
      estoque_estoque_id: {
        type: Sequelize.INTEGER(11),
        foreignKey: true,

      },
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');

  }
};
