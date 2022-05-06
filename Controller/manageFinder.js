const { findRegisterId, findRegisterName, findRegisterDocument } = require("../Models/Finders/findsRegister")
const { findTrainId, findTrainName, findTrainMaterial } = require("../Models/Finders/findsTrain")


async function controllerFinderRegister(req, res){

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


function controllerFinderTrain(req) {
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

module.exports = { controllerFinderRegister, controllerFinderTrain }
