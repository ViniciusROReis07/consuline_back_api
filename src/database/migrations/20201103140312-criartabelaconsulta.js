'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("tblConsulta", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      valor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desconto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      horario: {
        type: Sequelize.TIME,
        allowNull: false
      },
      PacienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblPaciente",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      ProfissionalId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblProfissional",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      FilialId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        refences: {
          model: "tblprofissional",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      Servico: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblservico",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      Atemdimento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refences: {
          model: "tblatendimento",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tblconsulta");
  }
};