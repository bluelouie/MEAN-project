var express = require('express');
var router = express.Router();
var Task = require('../models/task')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Task.find()
    .exec(function (err, tasks) {
        if (err) {
            return res.status(500).json({
                title: 'Error Occurred',
                error: err.message
            });
        } 
        res.status(200).json({
            message: 'Success!!',
            obj: tasks
        })
    })
});

router.post('/', function (req, res, next) {
    var task = new Task({
        title       : req.body.title,
        description : req.body.description,
        createdDate : req.body.createdDate,
        isDone      : req.body.isDone,
        userId      : req.body.userId
    });
    task.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Error Occurred',
                error: err.task
            });
        }
        res.status(201).json({
            message: 'Saved!',
            obj: result
        });
    });
});

module.exports = router;
