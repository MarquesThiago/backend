const Train = require('./../Model/train')
const Room = require("./../Model/class")


async function finderClass(element){

    return Room.findAll({
        include: [{
            model: Train,
            required: false
        }]
    })
}

module.exports = { finderClass}