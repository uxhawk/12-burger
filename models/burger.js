// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    createOne: function(name, cb) {
        orm.createOne(name, function(res) {
            cb(res);
        });
    },
    updateOne: function(rowID, cb) {
        orm.updateOne(rowID, function(res) {
            cb(res);
        });
    },
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;