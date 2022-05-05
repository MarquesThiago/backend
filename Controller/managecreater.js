const {createRegister} = require("./../Models/insert/register")

async function controllerCreaterRegister(req, res){
    req.body.dateNow = new Date(Date.now()).toISOString()
    let  register =  await createRegister(req)
    res.json(register)
}

module.exports = {controllerCreaterRegister}