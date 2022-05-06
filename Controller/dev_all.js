const register = require("../Models/Model/register")

const allRegister =  (_req, _res) => {
    register.findAll().then((result) => {
        return result;
    })
}

module.exports = { allRegister }
