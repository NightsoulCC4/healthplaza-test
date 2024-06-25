const express = require('express');
const router = express.Router();

let todos = [];
let currentId = 1;

router.get('/', (req, res) => {

    res.status(200).json(todos);
});

router.post('/', (req, res) => {

    const { title } = req.body;

    const newTodo = {
        id: currentId++,
        title: title,
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});

router.put('/:id', (req, res) => {

    const { id } = req.params;
    const { title, completed } = req.body;

    const parsed_id = parseInt(id, 10);

    const todo = todos.find(el => el.id === parsed_id);

    if (todo) {
        todo.title = title !== undefined ? title : todo.title;
        todo.completed = completed !== "1" ? todo.completed : true;
        res.status(204).json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

router.delete('/:id', (req, res) => {

    const { id } = req.params;

    const parsed_id = parseInt(id, 10);

    todos = todos.filter(el => el.id !== parsed_id);

    res.status(204).end();
});

module.exports = router;
