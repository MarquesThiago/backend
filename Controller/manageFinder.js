const { findRegisterId, findRegisterName, findRegisterDocument } = require("../Models/Finders/findsRegister")
const { findCourseId, findCourseName, findCourseMaterial, findCourseHours } = require("../Models/Finders/findsCourse")
const { 
    finderEmployeeDepth,
    finderEmployeeDocument,
    finderEmployeeName,
    finderEmployeeId,
    finderEmployeeOffice  
} = require("../Models/Finders/finderEmployee")
const { finderClassCourse, finderClassDate, finderClassRoom } = require("./../Models/Finders/findersClass")


async function controllerFinderRegister(req, _res) {
    const typeFind = req.body.controller

    switch(typeFind){
        case "id":
            return findRegisterId(req)
        case "name":
            return findRegisterName(req)
        case "document":
            return findRegisterDocument(req)
        default:
            return { message: "Sorry!, Not Found Elements, Verify Your Requisition And Try Again" }
    }
}


async function controllerFinderCourse(req, _res) {
    const typeFind = req.body.controller

    switch(typeFind){
        case "id":
            return findCourseId(req)
        case "name":
            return findCourseName(req)
        case "material":
            return findCourseMaterial(req)
        case "hours":
            return findCourseHours(req)
        default:
            return { message: "Sorry!, Not Found Elements, Verify Your Requisition And Try Again" }
    }
}

async function controllerFinderEmployee(req, res){

    switch(req.body.controller){
        case "id":
            return finderEmployeeId(req.body.id)
        case "name":
            return finderEmployeeName(req.body.name)
        case "document":
            return finderEmployeeDocument(req.body.numDocument)
        case "depth":
            return finderEmployeeDepth(req.body.depth)
        case "office":
            return finderEmployeeOffice(req.body.office)
        default:
            res.status(404).send({"message": "Sorry!, Not Found Elements, Verify Your Requisition And Try Again"})
    }
}


async function controllerFinderClasses(req, res){

    const typeFind = req.body.controller

    switch(typeFind){
        case "course":
            return finderClassCourse(req.body.nameCourse)
        case "room":
            return finderClassRoom(req.body.room)
        case "date":
            return finderClassDate(req.body.dateStart)
        default:
            res.status(404).send({"message" : "Sorry!, Not Found Elements, Verify Your Requisition And Try Again"})
    }
}

module.exports = { 
    controllerFinderRegister, 
    controllerFinderCourse, 
    controllerFinderEmployee, 
    controllerFinderClasses 
}
