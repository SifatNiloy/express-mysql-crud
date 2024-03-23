// config/db.js
const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: "localhost",
  user: "sifatniloy_sifat	", 
  password: "...", // MySQL password
  database: "sifatniloy_businessdb2", 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the pool to be used in other modules
module.exports = pool.promise();
