const register = require("../Model/register")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

function findRegisterName(req) {
    return register.findAll({
        where: {
            nome: {
                [Op.like]: `%${req.body.name}%`
            }
        }
    }).catch(() => {return {}})
}

async function  findRegisterId(req) {
    return register.findByPk(req.body.id)
}

async function  findRegisterDocument(req) {
    return register.findAll({
        where: {
            numero_documento: {
                [Op.like] : `%${req.body.document}%`
            }
        }
    }).catch(() => { return {}})
}

module.exports =  { findRegisterName, findRegisterId, findRegisterDocument }
