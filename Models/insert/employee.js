const Employee = require('./../Model/employee')

async function createEmployee (element) {
    return Employee.create({
        cargo: element.office,
        departamento:element.depth,
        especialidade: element.spec,
        id_cadastro: element.idRegister,
        cadastroIdCadastro: element.idRegister
    })
}

module.exports = { createEmployee }
