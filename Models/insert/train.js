const Train = require("./../Model/train")


async function createTrain(element){
    return Train.create({
        nome: element.name,
        material_alvo: element.material,
        carga_horaria: element.hours
    }) 
}

module.exports = { createTrain}