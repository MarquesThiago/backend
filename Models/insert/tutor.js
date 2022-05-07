const Tutor = require("./../Model/tutor")


async function CreateTutor(element){
    return Tutor.create({
        id_funcionario: element.idEmployee,
        id_turma: element.idTeam, 
        funcao: element.atuation
    })
}

module.exports = {CreateTutor}