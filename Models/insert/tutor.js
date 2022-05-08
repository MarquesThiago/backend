const Tutor = require("./../Model/tutor")


async function createTutor(element){
    return Tutor.create({
        id_funcionario: element.idEmployee,
        id_turma: element.idTeam, 
        funcao: element.atuation
    })
}

module.exports = {createTutor}