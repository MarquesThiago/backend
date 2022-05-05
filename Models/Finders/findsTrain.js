const curse = require("../Model/train")
const Sequelize = require("sequelize")
const Op = Sequelize.Op

function  findTrainName(req) {
    let train  =  curse.findAll({
        where: {
            nome: {
                [Op.Like]: `%${req.body.name}%`
            }
        }
    }).catch(() => {return {}})
    
    return train

}

async function  findTrainId(req) {
    let train  =  await curse.findByPk(req.body.id)
    return train
}

async function  findTrainMaterial(req) {
    let train  =  await curse.findAll({
        where: {
            material_alvo: {
                [Op.Like] : `%${req.body.materia}%`
            }
        }
    }).catch(() => { return {}})
    return train
}

module.exports =  {findTrainName, findTrainId, findTrainMaterial }