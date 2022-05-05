const express = require( 'express')
const {controllerFinderRegister, controllerFinderTrain} = require("./../Controller/manageFinder")
const {controllerCreaterRegister} = require("./../Controller/managecreater")
const {allRegister} = require("./../Controller/dev_all")


const routes =  express.Router()

routes.get("/", (req , res) => {
    return res.json( {status : 500})
})

routes.post("/find-cad",  controllerFinderRegister)

routes.post("/find-curse", async (req , res) => {
    let register = await controllerFinderTrain(req)
    res.json(register)
})

routes.post("/create-register", controllerCreaterRegister)

routes.get("/all", allRegister)

module.exports = routes 