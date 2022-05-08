const Team = require("./../Model/class")

async function createClasses(element){
    return Team.create({
        sala: element.room,
        created_at: element.dateStart,
        id_curso:  element.idCurse
    })
}

module.exports = {createClasses}