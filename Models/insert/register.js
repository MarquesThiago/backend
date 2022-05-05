const cadastro = require("../Model/cadastro")

async function createRegister(req){

    let body = req.body
    console.log(body.name)

   let register = await cadastro.create({
        nome:body.name ,
        numero_documento:body.numDocument,
        data_nascimento:body.dataNasc,
        telefone:body.phone,
        endereço:body.address,
        status:body.status,
        cidade:body.city,
        UF:body.state,
        created_at:body.dateNow
    })

    return register 

}

module.exports = {createRegister}