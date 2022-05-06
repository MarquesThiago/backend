const cadastro = require("../Model/cadastro")

function createRegister(req){
    return cadastro.create({
        nome: req.body.name ,
        numero_documento: req.body.numDocument,
        data_nascimento: req.body.dataNasc,
        telefone: req.body.phone,
        endereço: req.body.address,
        status: req.body.status,
        cidade: req.body.city,
        UF: req.body.state,
    })
}

module.exports = { createRegister }
