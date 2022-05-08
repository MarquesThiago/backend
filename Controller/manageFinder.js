const { findRegisterId, findRegisterName, findRegisterDocument } = require("../Models/Finders/findsRegister")
const { findTrainId, findTrainName, findTrainMaterial } = require("../Models/Finders/findsCourse")
const { 
    finderEmployeeDepth,
    finderEmployeeDocument,
    finderEmployeeName,
    finderEmployeeId,
    finderEmployeeOffice  
 } = require("../Models/Finders/finderEmployee")
 
const {finderTutor} = require("./../Models/Finders/findesTutor")


async function controllerFinderRegister(req, _res){

    const typeFind = req.body.controller

    switch(typeFind){
        case "id":
            return findRegisterId(req)
        case "name":
            return findRegisterName(req)
        case "document":
            return findRegisterDocument(req)
        default:
            return {status: 404, message: "Sorry!, Not Found Elements, Verify Your Requisition And Try Again"}
    }
}


async function controllerFinderTrain(req) {
    const typeFind = req.body.controller

    switch(typeFind){
        case "id":
            return findTrainId(req)
        case "name":
            return findTrainName(req)
        case "material":
            return findTrainMaterial(req)
        default:
            return {status: 404, message: "Sorry!, Not Found Elements, Verify Your Requisition And Try Again"}
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

module.exports = { controllerFinderRegister, controllerFinderTrain, controllerFinderEmployee }
