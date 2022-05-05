const express = require( 'express')
const {controllerFinderRegister, controllerFinderTrain} = require("./../Controller/manageFinder")
const {controllerCreaterRegister} = require("./../Controller/managecreater")


const routes =  express.Router()

routes.get("/", (req , res) => {
    return res.json( {status : 500})
})

routes.post("/find-cad", (req , res) => {
    let register = controllerFinderRegister(req)
    res.json(register)
})

routes.post("/find-curse", (req , res) => {
    let register = controllerFinderTrain(req)
    res.json(register)
})

routes.post("/create-register", (req, res) => {
    let register = controllerCreaterRegister(req)
    res.json(register)
})


module.exports = routes 