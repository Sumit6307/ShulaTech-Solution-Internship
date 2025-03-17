// backend/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

// GET all tasks
router.get('/', getTasks);

// POST a new task
router.post('/', createTask);

// PUT update a task
router.put('/:id', updateTask);

// DELETE a task
router.delete('/:id', deleteTask);

module.exports = router;
