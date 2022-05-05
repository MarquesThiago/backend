const { findRegisterId, findRegisterName, findRegisterDocument } = require("../Models/Finders/findsRegister")
const {findTrainId, findTrainName, findTrainMaterial} = require("../Models/Finders/findsTrain")


 async function controllerFinderRegister(req, res){

    let typeFind = req.body.controller
    let register

    switch(typeFind){
        case "id":
             register =  await findRegisterId(req)
             res.json(register)
        case "name":
            register = await findRegisterName(req)
            res.json(register)
        case "document":
            register = await findRegisterDocument(req)
            res.json(register)
        default:
            return {status: 404, message: "Sorry!, Not Found Elements, Verify Your Requisition And Try Again"}
    }
}


function controllerFinderTrain(req){

    let typeFind = req.body.controller
    
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



 module.exports = {controllerFinderRegister, controllerFinderTrain}