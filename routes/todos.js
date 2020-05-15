const express = require("express");
const router = express.Router();
const database = require("../models"); //gets all schemas && setups db connection

router.get("/", function(req, res) {
    database.ToDo.find()
    .then(function(foundToDos) {
        res.json(foundToDos)
    })
    .catch(function(err) {
        res.send(err);
    })
})

router.post("/", function(req, res) {
    let newToDo = {name: req.body.name};
    database.ToDo.create(newToDo)
    .then(function(createdToDo){
        res.status(201).json(createdToDo);
    })
    .catch(function(err) {
        res.send(err);
    })
})

router.get("/:todoId", function(req, res) {
    database.ToDo.findById(req.params.todoId)
    .then(function(foundToDo) {
        res.json(foundToDo);
    })
    .catch(function(err) {
        res.send(err);
    })
})

router.put("/:todoId", function(req, res) {
    database.ToDo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(updatedToDo) {
        res.json(updatedToDo);
    })
    .catch(function(err) {
        res.send(err);
    })
})

module.exports = router;