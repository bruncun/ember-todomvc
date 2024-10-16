import Component from '@glimmer/component';
import type { Todo } from 'ember-todomvc/services/todos';

export interface TodoAppSignature {
  // The arguments accepted by the component
  Args: {
    todos: Todo[];
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
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    TodoApp: typeof TodoApp;
  }
}
