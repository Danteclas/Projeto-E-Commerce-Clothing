'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Users', [
        {
          name: 'admin',
          description: 'tem as permissões de ler, criar, deletar e atualizar informações no banco de dados'
        },
      
      ], {});
  },
  async down (queryInterface, Sequelize) {
       
      await queryInterface.bulkDelete('Users', null, {});
    
  }
};
