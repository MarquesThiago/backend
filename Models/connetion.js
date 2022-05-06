const Sequelize =  require('sequelize')
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}

const dbLocal = process.env.DB_LOCAL || './DB/register_green_teens.sqlite3'
const dbLanguage  = process.env.DB_LANGUAGE || 'sqlite'

const sequelize = new Sequelize({
    dialect: dbLanguage,
    storage: dbLocal,
    operatorsAliases
})

module.exports =  sequelize
