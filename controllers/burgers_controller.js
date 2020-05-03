// ****************************
// Import Express and burger model to use its DB functions
// ****************************
const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

// ****************************
// Start paste from cats example
// ****************************

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
        "name"
    ], [
        req.body.name
    ], function(result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// ****************************
// End paste from cats example
// ****************************



// ****************************
// Export routes for server.js
// ****************************
module.exports = router;