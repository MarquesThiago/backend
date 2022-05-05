const  Sequelize =  require("sequelize")
const cadastro = require('./cadastro')
const db = require("../connetion")

const employee =  db.define( "funcioanrio", {
    id_funcionario: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    cargo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    departamento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      especialidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    id_cadastro: {
        type: Sequelize.INTEGER,
        references: {
            model: 'register',
            key: 'id_cadastro',
        }
      },

})

employee.hasOne(cadastro)

module.exports =  employee