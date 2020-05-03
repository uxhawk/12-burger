// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, tableInput, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    createOne: function(name, cb) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);";

        connection.query(queryString, name, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne: function(rowID, cb) {
        const queryString = "UPDATE burgers SET devoured = true WHERE id = ?;";

        connection.query(queryString, rowID, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

};

// Export the orm object for the model (cat.js).
module.exports = orm;