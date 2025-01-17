'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.createTable('usuarios', { 

      id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER.UNSIGNED
    },
     
    nome: {
        allowNull: false,
        type: Sequelize.STRING(150)
    },

    telefone: {
      allowNull: false,
      type: Sequelize.STRING(11)
    },

    senha: {
      allowNull: false,
      type: Sequelize.STRING(60)
    },

    numero_documento: {
      allowNull: false,
      type: Sequelize.STRING(14)
    },

    email: {
      allowNull: false,
      type: Sequelize.STRING
    }
  }, {
    tableName: 'usuarios',
    timestamps: false
  });
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('usuarios');
  }
};
