const express = require('express');
const router = express.Router();

const { userRepo, projectRepo } = require('../repos');
const User = require('../models/user');

router.get('/', (req, res) => {
  const users = userRepo.getAll();
  return res.status(200).json(users);
});

router.post('/', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const newUser = new User(null, name, email);
  const createdUser = userRepo.create(newUser);

  return res.status(201).json(createdUser);
});

router.get('/:userId/projects', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userProjects = projectRepo.getByUserId(userId);

  return res.status(200).json(userProjects);
});

module.exports = router;
