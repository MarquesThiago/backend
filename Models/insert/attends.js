const Attends = require("./../Model/attend")

async function createAttends(element){
    return Attends.create({
        id_turma: element.idTeam,
        id_cadastro: element.idRegister
    })
}

module.exports  = { createAttends}
