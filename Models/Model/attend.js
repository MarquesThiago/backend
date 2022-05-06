const  Sequelize =  require("sequelize")
const db = require("../connetion")
const team = require('./class')
const register = require('./cadastro')

const attends = db.define('cursar', {
    id_turma: {
        type: Sequelize.INTEGER,
        references: {
            model: 'team',
            key: 'id_turma',
        }
    },
    id_cadastro: {
        type: Sequelize.INTEGER,
        references: {
            model: 'register',
            key: 'id_cadastro',
        }
    },
})

attends.belongsToMany(team)
attends.belongsToMany(register)

module.exports = attends
