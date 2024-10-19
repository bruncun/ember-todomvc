import type { TestContext } from '@ember/test-helpers';
import type TodoApp from 'ember-todomvc/components/todo-app';
import type { Todo } from 'ember-todomvc/services/todos';

export interface Context extends TestContext {
  todos: Todo[];
  updateTodos: TodoApp['updateTodos'];
  deleteTodos: TodoApp['deleteTodos'];
}
