// ****************************
// Set up MySQL Connection
// ****************************
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

// ****************************
// Make Connection
// ****************************

connection.connect((err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`Successfully connected.`);
});

// ****************************
// Export connection for ORM
// ****************************

module.exports = connection;