const curse = require("../Model/train")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

function findTrainName(req) {
    return  curse.findAll({
        where: {
            nome: {
                [Op.Like]: `%${req.body.name}%`
            }
        }
    }).catch(() => {return {}})
}

async function  findTrainId(req) {
    return curse.findByPk(req.body.id)
}

async function  findTrainMaterial(req) {
    return curse.findAll({
        where: {
            material_alvo: {
                [Op.Like] : `%${req.body.materia}%`
            }
        }
    }).catch(() => { return {}})
}

module.exports =  { findTrainName, findTrainId, findTrainMaterial }
