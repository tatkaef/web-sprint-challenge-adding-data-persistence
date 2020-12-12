// build your `/api/projects` router here

const express = require('express');

const Project = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
  Project.findProjects()
  .then(value => {
    res.json(value);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects' });
  });
});

router.post('/', (req, res) => {
  const changes = req.body;

  Project.addProject(changes)
  .then(value => {
    res.status(201).json(value);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Project' });
  });
});


module.exports = router;