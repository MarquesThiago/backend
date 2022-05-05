const cadastro = require("../Models/Model/cadastro")


const allRegister =  (req, res) => {
    cadastro.findAll().then((result) =>{
        res.json(result)
    })
}

module.exports = {allRegister}