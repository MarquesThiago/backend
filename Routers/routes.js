const express = require('express')
const { 
    controllerFinderRegister, 
    controllerFinderCourse, 
    controllerFinderEmployee,
    controllerFinderClasses
} = require("./../Controller/manageFinder")

const { 
    controllerCreaterRegister, 
    controllerCreaterEmployee, 
    controllerCreaterCourse, 
    controllerCreaterClasses 
} = require("./../Controller/managecreater")

const { allRegister, finderEmployeeAll } = require("./../Controller/dev_all")


const routes =  express.Router()

routes.get("/", (_req , res) => {
    return res.status(200).send({})
})

routes.post("/find-cad", async (req , res) => {
    const register = await controllerFinderRegister(req, res)

    if (!req.body.controller) {
        res.status(404).send(register)
    }

    res.status(200).send(register)
})

routes.post("/find-course", async (req , res) => {
    const register = await controllerFinderCourse(req, res)
    res.status(200).send(register)
})

routes.post("/create-register", async (req, res) => {
    const register = await controllerCreaterRegister(req)

    if (!req.body.controller) {
        res.status(404).send(register)
    }

    res.status(200).send(register)
})

routes.post("/create-employee", async (req, res) => {
    const register = await controllerCreaterEmployee(req) 
    res.status(200).send(register)
})

routes.post("/create-courses", async (req, res) => {
    const register = await controllerCreaterCourse(req) 
    res.status(200).send(register)
})

routes.post("/create-classes", async (req, res) => {
    const register = await controllerCreaterClasses(req) 
    res.status(200).send(register)
})

routes.post("/find-employee", async (req, res) => {
    const register = await controllerFinderEmployee(req, res)
    res.status(200).send(register)
})

routes.post("/find-classes", async (req, res) => {
    const register = await controllerFinderClasses(req, res)
    res.status(200).send(register)
})


routes.get("/all", async (req, res) => {
const registers = await allRegister(req, res);
res.status(200).send(registers)
})

routes.get("/all-employee", async (req, res) => {
    const register = await finderEmployeeAll()
    res.status(200).send(register)
})

module.exports = routes 
