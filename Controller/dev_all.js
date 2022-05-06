const register = require("../Models/Model/register")

const allRegister =  (req, res) => {
    register.findAll().then((result) => {
        return result;
    })
}

module.exports = { allRegister }
