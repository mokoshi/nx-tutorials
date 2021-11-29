import { Express } from 'express';
import { Todo } from '@mokoshi/data';
import * as dayjs from 'dayjs';

const todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const newTodo = {
      title: `New todo ${dayjs().format('YYYY-MM-DD HH:mm:ss')}`,
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}
