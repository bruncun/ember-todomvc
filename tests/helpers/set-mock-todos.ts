import type { Todo } from 'ember-todomvc/services/todos';
import type { Context } from './types';

export default async function (context: Context) {
  const mockTodos: Todo[] = [
    { id: '1', text: 'Learn Ember', isCompleted: true },
    { id: '2', text: 'Build an app', isCompleted: true },
  ];
  context.set('todos', mockTodos);
}
