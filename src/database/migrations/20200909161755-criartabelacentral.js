"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblCentral", {
      centralId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      },

      login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      senha: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    }).success(() => {
      const queryInsertCentral = `insert into tblCentral 
      (email, login, senha, nome, created_at, updated_at) values 
      ('centralConsuline@gmail.com', 'admin', 'admin', 'Central Admistradora', NOW(), NOW());`;

      migration.migrator.sequelize.query(queryInsertCentral);

      done();
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblCentral");
  },
};