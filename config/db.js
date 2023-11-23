
const mysql = require('mysql');

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',      // Usually 'localhost'
  user: 'root',
  password: '',
  port:3307,
  database: 'test'
});

// Establish the connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});
// const pool = mysql.createPool(connection);
const pool = mysql.createPool({
    connectionLimit: 10, // Change the limit as per your requirement
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3307,
    database: 'test'
  });
module.exports = {
        pool
      };