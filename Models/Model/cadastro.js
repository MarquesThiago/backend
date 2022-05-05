const  Sequelize =  require("sequelize")
const db = require("../connetion")

module.exports = db.define("cadastro", {
  id_cadastro: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero_documento: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  data_nascimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  telefone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  endereço: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  status: {
      type: Sequelize.INTEGER,
      allowNull: false,
  },
  cidade: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  UF: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  created_at: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});