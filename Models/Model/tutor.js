const  Sequelize =  require("sequelize")
const employee = require('./employee')
const team = require('./class')
const db = require("../connetion")

const tutor = db.define('tutorar', {
    id_funcionario: {
        type: Sequelize.INTEGER,
        references: {
            model: 'funcioanrios',
            key: 'id_funcionario',
        }
    },
    id_turma: {
        type: Sequelize.INTEGER,
        references: {
            model: 'turmas',
            key: 'id_turma',
        }
    },
    funcao: {
        type: Sequelize.STRING,
        allowNull : false
    }
})

tutor.belongsTo(employee)
tutor.belongsTo(team)

module.exports = tutor