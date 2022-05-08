const  Sequelize =  require("sequelize")
const Course = require('./course')
const db = require("../connetion")


const team = db.define("turma",{
    id_turma: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    sala: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    id_curso: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
            model: 'cursos',
            key: 'id_curso',
        }
    },
})


team.belongsTo(Course)


module.exports = team