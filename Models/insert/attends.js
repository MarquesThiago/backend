const Attends = require("./../Model/attend")

async function createAttends(req){
    return Attends.create({
        id_turma: req.idTeam,
        id_cadastro: req.idRegister
    })
}

module.exports  = { createAttends}
