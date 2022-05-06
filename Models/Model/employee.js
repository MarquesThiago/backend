const  Sequelize =  require("sequelize")
const register = require('./register')
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

employee.hasOne(register)

module.exports =  employee