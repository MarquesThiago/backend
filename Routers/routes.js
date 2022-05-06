const express = require('express')
const { controllerFinderRegister, controllerFinderTrain } = require("./../Controller/manageFinder")
const { controllerCreaterRegister } = require("./../Controller/managecreater")
const { allRegister } = require("./../Controller/dev_all")

const routes =  express.Router()

routes.get("/", (_req , res) => {
    return res.status(204).send()
})

routes.post("/find-cad", async (req , res) => {
    const register = await controllerFinderRegister(req)
    res.status(200).send(register)
})

routes.post("/find-course", (req , res) => {
    const register = controllerFinderTrain(req)
    res.status(200).send(register)
})

routes.post("/create-register", async (req, res) => {
    const register = await controllerCreaterRegister(req)
    res.status(200).send(register)
})

router.get("/all", async (req, res) => {
const registers = await allRegister(req, res);
res.status(200).send(registers)
})

module.exports = routes 
