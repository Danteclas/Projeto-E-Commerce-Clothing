'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('products', { 
      id: {
      type:Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    marca:{
      type : Sequelize.STRING,
      allowNull:false
    },
    modelo:{
      type : Sequelize.STRING,
      allowNull:false
    },
    preco:{
      type : Sequelize.FLOAT,
      allowNull:false
    },
    tamanho:{
      type : Sequelize.STRING,
      allowNull:false
    },

  });
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('products');
     
  }
};
