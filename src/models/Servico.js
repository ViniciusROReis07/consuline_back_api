const { DataTypes, Model } = require("sequelize");

class Servico extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        imagem: DataTypes.STRING,
      },
      { sequelize, tableName: "tblServico" }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Filial, {
      through: "tblFilialServico",
    });

    this.hasMany(models.ProfissionalDaSaude, {
      foreignKey: "ServicoId",
    });


    this.hasMany(models.Consulta, {
      foreignKey: "ServicoId",
    });
  }
}

module.exports = Servico;
