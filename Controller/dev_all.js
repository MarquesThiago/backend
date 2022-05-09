const Register = require("../Models/Model/register")
const Employee = require("./../Models/Model/employee")

const allRegister = async  (_req, _res) => {
    return Register.findAll().catch(
        () => {return {}}
    )
}


async function finderEmployeeAll(){
    return Employee.findAll({
        include: [{
            model:  Register,
            required: true,
            attributes: ["nome", "numero_documento", "data_nascimento","telefone", "status", "UF"]
        }]
})}

module.exports = { allRegister, finderEmployeeAll }
