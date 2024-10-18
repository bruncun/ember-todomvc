import Component from '@glimmer/component';
import type { Todo } from 'ember-todomvc/services/todos';
import type { Filter } from 'ember-todomvc/controllers';

export interface TodoAppSignature {
  // The arguments accepted by the component
  Args: {
    todos: Todo[];
    filter: Filter;
  };
}

export default class TodoApp extends Component<TodoAppSignature> {
  get isTodosEmpty() {
    return this.args.todos.length === 0;
  }
  get isAllTodosCompleted() {
    const isAllTodosCompleted = this.args.todos.every(
      ({ isCompleted }) => isCompleted,
    );
    return isAllTodosCompleted;
  }
  get isCompletedTodosEmpty() {
    const completedTodos = this.args.todos.filter(
      ({ isCompleted }) => isCompleted,
    );
    return completedTodos.length === 0;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    TodoApp: typeof TodoApp;
  }
}
