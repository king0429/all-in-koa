const mysql = require('mysql2/promise');
const bluebird = require('bluebird');

const db = mysql.createPool({
  'user': 'root',
  'password': '123456',
  'host': 'localhost',
  'database': 'mock_data_nsmain',
  Promise: bluebird
})

module.exports = db