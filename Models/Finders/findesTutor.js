const Employee  = require('./../Model/employee')
const Room = require('./../Model/class')
const Tutor = require('./../Model/tutor')

async function finderTutor(){

    return Tutor.findAll({
        include: [{
            model: Room,
            required: false,
        },{
            model:Employee,
            required: false   
        }
    ]
    })
}

module.exports = {finderTutor}
