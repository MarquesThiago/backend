const { createRegister } = require("./../Models/insert/register")
const {createEmployee} = require('.//../Models/insert/employee')
const {createTutor} = require("./../Models/insert/tutor")
const{createCourse} = require("./../Models/insert/course")
const {createClasses} = require("./../Models/insert/class")
const {createAttends} = require("./../Models/insert/attends")


async function controllerCreaterRegister(req, _res){
    req.body.dateNow = new Date(Date.now()).toISOString()
    let register = await createRegister(req)
    register["dataValues"]["AddedClasses"]  = []

    for( let index = 0; index < req.body.listClasses.length; index++){
        let team =  req.body.listClasses[index]
        team["idRegister"] = register.id_cadastro

        let attend = await createAttends(team)
        register["dataValues"]["AddedClasses"].push(attend['dataValues'])

    }

    return register

}

async function controllerCreaterEmployee(req){
    let employee = await createEmployee(req.body)
    
    employee["dataValues"]["listClassesCreated"] = [ ]

    for( let index = 0; index < req.body.listClasses.length; index++ ){
            let tutor =  req.body.listClasses[index]
            tutor["idEmpployee"] =  employee.id_funcionario
            
            await createTutor(tutor)
            employee["dataValues"]["listClassesCreated"] .push(tutor)
          
    }

    return employee
}

async function controllerCreaterCourse(req){
    return createCourse(req.body) 
}

async function controllerCreaterClasses(req){
    return createClasses(req.body)
}



module.exports = { controllerCreaterRegister , controllerCreaterEmployee,
     controllerCreaterCourse, controllerCreaterClasses}
