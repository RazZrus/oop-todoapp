const express = require('express');
const router = express.Router();

const { projectRepo, taskRepo } = require('../repos');
const Project = require('../models/project');

router.get('/', (req, res) => {
  const projects = projectRepo.getAll();
  res.status(200).json(projects);
});

router.post('/', (req, res) => {
  const { name, userId } = req.body;

  if (!name || !userId) {
    return res.status(400).json({ error: 'Project name and userId are required.' });
  }

  const newProject = new Project(null, name, userId);
  const created = projectRepo.create(newProject);

  res.status(201).json(created);
});

router.get('/:projectId/tasks', (req, res) => {
  const projectId = parseInt(req.params.projectId);
  const relatedTasks = taskRepo.getByProjectId(projectId);

  res.status(200).json(relatedTasks);
});

module.exports = router;
