const register = require("../Model/register")

async function createRegister(req){
    const body = req.body

    return register.create({
        nome:body.name,
        numero_documento:body.numDocument,
        data_nascimento:body.dataNasc,
        telefone:body.phone,
        endereço:body.address,
        status:body.status,
        cidade:body.city,
        UF:body.state,
        created_at:body.dateNow,
    })
}

module.exports = { createRegister }
