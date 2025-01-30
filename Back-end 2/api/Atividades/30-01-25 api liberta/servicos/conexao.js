import mysql from 'mysql2/promise'
import { deflate } from 'zlib'

const poll = mysql.createPool({
    host: 'localhost',
    user: 'libertadores',
    password: 'liberta123',
    database: 'libertadores'

})

export default Pool;
