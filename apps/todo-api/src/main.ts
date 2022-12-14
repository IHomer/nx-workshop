import * as express from 'express';
import { Todo } from '@nx-workshop/shared/domain';

const app = express();
const todos: Todo[] = [];

app.use(express.json());

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  const todo: Todo = {
    id: todos.length,
    text: req.body.text,
    done: false,
  };

  todos.push(todo);

  res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
  const id = Number(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }

  res.json({ deleted: id });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
