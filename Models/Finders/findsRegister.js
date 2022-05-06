const cadastro = require("../Model/cadastro")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

function findRegisterName(req) {
    return cadastro.findAll({
        where: {
            nome: {
                [Op.Like]: `%${req.body.name}%`
            }
        }
    }).catch(() => {return {}})
}

async function  findRegisterId(req) {
    return cadastro.findByPk(req.body.id)
}

async function  findRegisterDocument(req) {
    return cadastro.findAll({
        where: {
            numero_documento: {
                [Op.Like] : `%${req.body.numero_documento}%`
            }
        }
    }).catch(() => { return {}})
}

module.exports =  { findRegisterName, findRegisterId, findRegisterDocument }
