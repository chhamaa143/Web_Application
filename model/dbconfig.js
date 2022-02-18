const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'registertable'
});

module.exports = pool;