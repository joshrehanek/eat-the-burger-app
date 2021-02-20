const mysql = require('mysql');
let connection;
require('dotenv').config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        // Your username
        user: 'root',
        // Your password
        password: process.env.password,
        database: 'burgers_db'
    });
};
connection.connect();

module.exports = connection;