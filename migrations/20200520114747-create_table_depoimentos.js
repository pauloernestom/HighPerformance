'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'depoimentos', 
      {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        img: {
          type: Sequelize.STRING(50),
          allowNull: false
      },
        nome: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        profissao: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        mensagem: {
          type: Sequelize.STRING(1000),
          allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('depoimentos');

  }
};
