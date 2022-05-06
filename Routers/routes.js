const express = require('express')
const { controllerFinderRegister, controllerFinderTrain } = require("./../Controller/manageFinder")
const { controllerCreaterRegister } = require("./../Controller/managecreater")

const routes =  express.Router()

routes.get("/", (req , res) => {
    return res.status(204).send()
})

routes.post("/find-cad", (req , res) => {
    const register = controllerFinderRegister(req)
    res.status(200).send(register)
})

routes.post("/find-course", (req , res) => {
    const register = controllerFinderTrain(req)
    res.status(200).send(register)
})

routes.post("/create-register", (req, res) => {
    const register = controllerCreaterRegister(req)
    res.status(200).send(register)
})

module.exports = routes 
