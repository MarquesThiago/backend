const Employee = require('./../Model/employee')

async function createEmployee (req) {
    return Employee.create({
        cargo: req.body.cargo,
        departamento:req.body.depth,
        especialidade: req.body.espec,
        id_cadastro: req.body.idRegister
    })
}

module.exports = { createEmployee }
