const  Sequelize =  require("sequelize")
const employee = require('./employee')
const team = require('./class')
const db = require("../connetion")

const tutor = db.define('tutorar', {
    id_funcionario: {
        type: Sequelize.INTEGER,
        references: {
            model: 'employee',
            key: 'id_funcionario',
        }
    },
    id_turma: {
        type: Sequelize.INTEGER,
        references: {
            model: 'team',
            key: 'id_turma',
        }
    },
    funcao: {
        type: Sequelize.STRING,
        allowNull : false
    }
})

tutor.belongTo(employee)
tutor.belongTo(team)

module.exports = tutor