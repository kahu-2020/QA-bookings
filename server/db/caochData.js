const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const db = require('knex')(config)

function getCoach(){
    return db('coach_db')
}

module.exports = {
    getCoach
}