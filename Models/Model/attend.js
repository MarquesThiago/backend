const  Sequelize =  require("sequelize")
const db = require("../connetion")
const team = require('./class')
const register = require('./register')

const attends = db.define('cursar', {
    id_turma: {
        type: Sequelize.INTEGER,
        references: {
            model: 'turmas',
            key: 'id_turma',
        }
    },
    id_cadastro: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: 'cadastros',
            key: 'id_cadastro',
        }
    },
})

attends.belongsTo(team)
attends.belongsTo(register)
module.exports = attends
