require('dotenv').config()

const express = require('express')
const routes = require('./Routers/routes')
const db = require("./Models/connetion")

const app = express();
const port = process.env.PORT || '8000'

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Connected in DataBase Principal`))
app.listen(port, () => console.log(`Started server in port ${port}`))
