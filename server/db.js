const Pool = require('pg').Pool
require('dotenv').config()

const pool = Pool({
    user: 'postgres',
    password: 'Canadian1!',
    host: 'localhost',
    port: 5432,
    database: 'todoapp'
})

module.exports = pool