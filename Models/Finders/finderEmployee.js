const Register = require("./../Model/register")
const Employee = require("./../Model/employee")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

async function finderEmployeeAll(){
    return Employee.findAll({
        include: [{
            model:  Register,
            required: true,
            attributes: ["nome", "numero_documento", "data_nascimento","telefone", "status", "UF"]
        }]
})}

async function finderEmployeeId(element){
    return Employee.findAll({
        where : {
            id_funcionario: element 
        },
        include: [{
            model:  Register,
            required: true,
            attributes: ["nome", "numero_documento", "data_nascimento","telefone", "status", "UF"]
        }]
})
}

async function finderEmployeeName(element){
    return Employee.findAll({
        include: [{
            model:  Register,
            required: true,
            rigth:true,
            where: {
                nome: {
                     [Op.like]: `%${element}%` 
                    }
            },
            attributes: ["nome", "numero_documento", "data_nascimento","telefone", "status", "UF"]
        }]
})
}

async function finderEmployeeDocument(element){
    return Employee.findAll({
        include: [{
            model:  Register,
            required: true,
            rigth:true,
            where: {
                numero_documento: {
                     [Op.like]: `%${element}%` 
                    }
            },
            attributes: ["nome", "numero_documento", "data_nascimento","telefone", "status", "UF"]
        }]
})
}

async function finderEmployeeOffice(element){
    return Employee.findAll({
        where : {
            cargo: {
                [Op.like]: `%${element}%` 
               }
        },
        include: [{
            model:  Register,
            required: true,
            attributes: ["nome", "numero_documento", "data_nascimento","telefone", "status", "UF"]
        }]
})
}

async function finderEmployeeDepth(element){
    return Employee.findAll({
        where : {
            departamento:  {
                [Op.like]: `%${element}%` 
               }
        },
        include: [{
            model:  Register,
            required: true,
            attributes: ["nome", "numero_documento", "data_nascimento","telefone", "status", "UF"]
        }]
})
}

module.exports = {
    finderEmployeeAll, 
    finderEmployeeId, 
    finderEmployeeName, 
    finderEmployeeDocument,
    finderEmployeeDepth,
    finderEmployeeOffice
}
