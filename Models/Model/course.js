const  Sequelize =  require("sequelize")
const db = require("../connetion")


module.exports = db.define("curso", {
  id_curso: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  material_alvo: {
      type: Sequelize.INTEGER,
      allowNull: false
  },
  carga_horaria: {
    type: Sequelize.FLOAT,
    allowNull: false,
  }
});