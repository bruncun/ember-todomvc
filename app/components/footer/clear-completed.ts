import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { Todo } from 'ember-todomvc/services/todos';
import type TodoApp from '../todo-app';

export interface FooterClearCompletedSignature {
  // The arguments accepted by the component
  Args: {
    todos: Todo[];
    deleteTodos: TodoApp['deleteTodos'];
  };
}

export default class FooterClearCompleted extends Component<FooterClearCompletedSignature> {
  @action
  clearCompleted() {
    const completedTodoIds = this.args.todos
      .filter(({ isCompleted }) => isCompleted)
      .map(({ id }) => id);
    this.args.deleteTodos(completedTodoIds);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Footer::ClearCompleted': typeof FooterClearCompleted;
  }
}
