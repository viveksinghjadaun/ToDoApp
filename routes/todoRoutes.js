const express = require('express');
const {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
  searchTodos,
} = require('../controllers/todoController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createTodo).get(protect, getTodos);
router.route('/:id').get(protect, getTodoById).put(protect, updateTodo).delete(protect, deleteTodo);
router.get('/search', protect, searchTodos);

module.exports = router;
