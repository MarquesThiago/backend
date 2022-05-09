const course = require("../Model/course")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

async function findCourseName(req) {
    return  course.findAll({
        where: {
            nome: {
                [Op.like]: `%${req.body.name}%`
            }
        }
    }).catch(() => {return {}})
}

async function  findCourseId(req) {
    return course.findByPk(req.body.id)
}

async function  findCourseMaterial(req) {
    return course.findAll({
        where: {
            material_alvo: {
                [Op.like] : `%${req.body.materia}%`
            }
        }
    }).catch(() => { return {}})
}

async function  findCourseHours(req) {
    return course.findAll({
        where: {
            carga_horaria: req.body.hours
        }
    }).catch(() => { return {}})
}


module.exports =  { findCourseName, findCourseId, findCourseMaterial, findCourseHours}
