import Controller from '@ember/controller';
import type { Todo } from 'ember-todomvc/services/todos';
import { tracked } from 'tracked-built-ins';

export type Filter = 'all' | 'active' | 'completed';

export default class IndexController extends Controller {
  declare model: { todos: Todo[] };

  queryParams = ['filter'];

  @tracked filter: Filter = 'all';

  get filteredTodos() {
    if (this.filter === 'active') {
      return this.model.todos.filter((todo) => !todo.isCompleted);
    } else if (this.filter === 'completed') {
      return this.model.todos.filter((todo) => todo.isCompleted);
    } else {
      return this.model.todos;
    }
  }

  get isTodosEmpty() {
    return this.model.todos.length === 0;
  }

  get isAllTodosCompleted() {
    const isAllTodosCompleted = this.model.todos.every(
      ({ isCompleted }) => isCompleted,
    );
    return isAllTodosCompleted;
  }

  get isCompletedTodosEmpty() {
    const completedTodos = this.model.todos.filter(
      ({ isCompleted }) => isCompleted,
    );
    return completedTodos.length === 0;
  }
}
