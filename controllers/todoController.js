const Todo = require('../models/Todo');

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;

  const todo = await Todo.create({
    user: req.user._id,
    title,
    description,
  });

  res.status(201).json(todo);
};

exports.getTodos = async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.page) || 1;

  const todos = await Todo.find({ user: req.user._id })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json(todos);
};

exports.getTodoById = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo && todo.user.toString() === req.user._id.toString()) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo && todo.user.toString() === req.user._id.toString()) {
    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;
    todo.isPinned = req.body.isPinned !== undefined ? req.body.isPinned : todo.isPinned;
    todo.isFavorite = req.body.isFavorite !== undefined ? req.body.isFavorite : todo.isFavorite;

    const updatedTodo = await todo.save();
    res.json(updatedTodo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (todo && todo.user.toString() === req.user._id.toString()) {
    await todo.remove();
    res.json({ message: 'Todo removed' });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
};

exports.searchTodos = async (req, res) => {
  const searchString = req.query.q;
  const todos = await Todo.find({
    user: req.user._id,
    $or: [
      { title: { $regex: searchString, $options: 'i' } },
      { description: { $regex: searchString, $options: 'i' } },
    ],
  });

  res.json(todos);
};
