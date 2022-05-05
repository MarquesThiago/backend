const cadastro = require("../Model/cadastro")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

function  findRegisterName(req) {
    console.log(req.body.name)
    let register  =  cadastro.findAll({
        where: {
            nome: {
                [Op.like]: `%${req.body.name}%`
            }
        }
    }).catch(() => {return {}})
    
    return register

}

async function  findRegisterId(req) {
    let register  =  await cadastro.findByPk(req.body.id)
    return register
}

async function  findRegisterDocument(req) {
    let register  =  await cadastro.findAll({
        where: {
            numero_documento: {
                [Op.like] : `%${req.body.document}%`
            }
        }
    }).catch(() => { return {}})
    return register
}

module.exports =  {findRegisterName, findRegisterId, findRegisterDocument }