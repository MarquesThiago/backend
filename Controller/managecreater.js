const { createRegister } = require("./../Models/insert/register")

function controllerCreaterRegister(req) {
    return createRegister(req)
}

module.exports = { controllerCreaterRegister }
