const Team = require("./../Model/class")

async function createClass(element){
    return Team.create({
        sala: element.room,
        created_at: element.dateStart,
        id_curso:  element.idCurse
    })
}

module.exports = {createClass}