const express = require('express');
const todoRoutes = require('./routes/todos');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/todos', todoRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
