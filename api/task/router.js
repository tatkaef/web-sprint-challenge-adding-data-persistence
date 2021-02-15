// build your `/api/tasks` router here

const express = require('express');

const Project = require('./model.js');

const router = express.Router();

//show all tasks
router.get('/', (req, res) => {    
    Project.findTasks()
    .then(value => {
      res.status(200).json(value)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

//show task for one project by id
router.get('/:id/', (req, res) => {
    const { id } = req.params;
  
    Project.findTasksById(id)
    .then(value => {
      res.status(200).json(value)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

router.post('/', (req, res) => {
    const changes = req.body;
    const { id } = req.params; 
  
    Project.addTask(changes, id)
        .then(task => {
          res.status(201).json(task);
        })      
   
    .catch (err => {
      res.status(500).json({ message: 'Error create new Task' });
    });
  });

module.exports = router;