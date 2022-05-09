const Course = require('./../Model/course')
const Room = require("./../Model/class")
const Sequelize = require("sequelize")
const Op = Sequelize.Op



async function finderClass(_element){

    return Room.findAll({
        include: [{
            model: Course,
            required: false
        }]
    })
}

async function finderClassCourse(element){

    return Room.findAll({
        include: [{
            model: Course,
            required: true,
            right: false,
            where : {
                nome: {
                    [Op.like] : `%${element}%`
                }
            }
        }]
    })
}

async function finderClassDate(element){

    return Room.findAll({
        where:{
            created_at: {
                [Op.like] : `${element}%`
        }
    },
        include: [{
            model: Course,
            required: false
        }]
    })
}

async function finderClassRoom(element){

    return Room.findAll({
        where: {
            sala: {
                [Op.like] : `%${element}%`
            }
        },
        include: [{
            model: Course,
            required: false
        }]
    })
}

module.exports = { finderClass, finderClassCourse, finderClassDate, finderClassRoom}