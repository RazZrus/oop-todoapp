const express = require('express');
const router = express.Router();

const { taskRepo } = require('../repos');
const Task = require('../models/task');

router.get('/', (req, res) => {
  const allTasks = taskRepo.getAll();
  res.status(200).json(allTasks);
});

router.post('/', (req, res) => {
  const { title, projectId, completed = false } = req.body;

  if (!title || !projectId) {
    return res.status(400).json({ error: 'Title and projectId are required.' });
  }

  const newTask = new Task(null, title, completed, projectId);
  const created = taskRepo.create(newTask);

  res.status(201).json(created);
});

router.put('/:taskId', (req, res) => {
  const id = parseInt(req.params.taskId);
  const updatedTask = taskRepo.update(id, req.body);

  if (!updatedTask) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  res.status(200).json(updatedTask);
});

router.delete('/:taskId', (req, res) => {
  const id = parseInt(req.params.taskId);
  const removed = taskRepo.delete(id);

  if (!removed) {
    return res.status(404).json({ error: 'Task not found.' });
  }

  res.json({ success: true });
});

module.exports = router;
