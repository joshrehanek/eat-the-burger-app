const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    // Your username
    user: 'root',
    // Your password
    password: 'pwhere',
    database: 'burger_db'
});
connection.connect();
// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax

module.exports = connection;