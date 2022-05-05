const cadastro = require("../Model/cadastro")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

function  findRegisterName(req) {
    let register  =  cadastro.findAll({
        where: {
            nome: {
                [Op.Like]: `%${req.body.name}%`
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
                [Op.Like] : `%${req.body.numero_documento}%`
            }
        }
    }).catch(() => { return {}})
    return register
}

module.exports =  {findRegisterName, findRegisterId, findRegisterDocument }