const employee = require('./../Model/employee')
const Employee = require('./../Model/employee')


async function createEmployee (req) {
    let employee =  await Employee.create({
        cargo: req.body.cargo,
        departamento:req.body.depth,
        especialidade: req.body.espec,
        id_cadastro: req.body.idRegister
    })

    return employee
}

module.exports = {createEmployee}