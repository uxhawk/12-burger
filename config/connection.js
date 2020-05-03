// ****************************
// Set up MySQL Connection
// ****************************
const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}


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