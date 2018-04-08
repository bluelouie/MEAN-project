var express = require('express');
var router = express.Router();
var Task = require('../models/task')

/* GET users listing. */
router.get('/', function (req, res, next) {
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
    title: req.body.title,
    description: req.body.description,
    createdDate: req.body.createdDate,
    isDone: req.body.isDone
    // userId      : req.body.userId
  });
  task.save(function (err, result) {
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

router.patch('/:id', function (req, res, next) {
  Task.findById(req.params.id, function (err, task) {
    if (err) {
      console.log("error 1");
      return res.status(500).json({
        title: 'Error Occurred',
        error: err
      });
    }
    if (!task) {
      console.log("error 2");
        return res.status(500).json({
          title: 'No task!',
          error: {message: "Task not found!"}
        });
      }
      task.title = req.body.title;
      task.description = req.body.description;
      task.isDone = req.body.isDone;
      task.save(function (err, result) {
        if (err) {
          console.log("error 3");
          return res.status(500).json({
            title: 'Error Occurred',
            error: err
          });
        }
        res.status(200).json({
          message: 'Updated task!',
          obj: result
        });
      });
  });
});

router.delete('/:id', function (req, res, next) {
  Task.findById(req.params.id, function (err, task) {
    if (err) {
      console.log("error 1");
      return res.status(500).json({
        title: 'Error Occurred',
        error: err
      });
    }
    if (!task) {
      console.log("error 2");
        return res.status(500).json({
          title: 'No task!',
          error: {message: "Task not found!"}
        });
      }
      task.remove(function (err, result) {
        if (err) {
          console.log("error 3");
          return res.status(500).json({
            title: 'Error Occurred',
            error: err
          });
        }
        res.status(200).json({
          message: 'Deleted task',
          obj: result
        });
      });
  });
});

module.exports = router;

