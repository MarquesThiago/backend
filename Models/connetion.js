require('dotenv').config()
const Sequelize =  require('sequelize')
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}


const dbLocal = process.env.DB_LOCAL
const dbLanguage  = process.env.DB_LANGUEGE

const sequelize = new Sequelize({
    // host: 'localhost',
    dialect: 'sqlite',
    storage: './DB/register_green_teens.sqlite3',
    operatorsAliases
})

module.exports =  sequelize