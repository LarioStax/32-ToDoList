const express = require("express");
const router = express.Router();
const database = require("../models"); //gets all schemas && setups db connection

router.get("/", function(req, res) {;
    database.ToDo.find()
    .then(function(foundToDos) {
        res.json(foundToDos)
    })
    .catch(function(err) {
        res.send(err);
    })
})

module.exports = router;