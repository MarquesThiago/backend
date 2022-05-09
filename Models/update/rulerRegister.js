const Register = require("./../Model/register")
const {findRegisterId}= require("./../Finders/findsRegister")


async function updateAttends(elementID){

    let obj = {"body": {
        "id": elementID
    }}

    let register = await findRegisterId(obj)

    console.log(register)

    if (register.status < 2 ){
        await Register.update(
            {status: 2},
            {where: {id_cadastro: register.id_cadastro }})
        return 2
    }else if( register.status == 3 ){
         await Register.update(
             {status: 4},
             {where: {id_cadastro: register.id_cadastro }})
         return 4
    }else{
        return false
    }
}

async function updateEmployee(elementID){

    let obj = {"body": {
        "id": elementID
    }}

    let register = await findRegisterId(obj)

    if (register.status < 2 ){
        await Register.update(
            {status: 3},
            {where: {id_cadastro: register.id_cadastro }})
        return 3
    }else if( register.status == 2 ){
         await Register.update(
             {status: 4},
             {where: {id_cadastro: register.id_cadastro }})
         return 4
    }else{
        return false
    }
}

module.exports = {updateAttends, updateEmployee}