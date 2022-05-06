const { createRegister } = require("./../Models/insert/register")

async function controllerCreaterRegister(req, _res){
    req.body.dateNow = new Date(Date.now()).toISOString()
    return createRegister(req)
}

module.exports = { controllerCreaterRegister }
