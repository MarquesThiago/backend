const  Course = require("./../Model/course")


async function createCourse(element){
    return Course.create({
        nome: element.name,
        material_alvo: element.material,
        carga_horaria: element.hours
    }) 
}

module.exports = { createCourse}