import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import type TodosService from 'ember-todomvc/services/todos';
import type { Todo } from 'ember-todomvc/services/todos';

export interface TodoAppClearCompletedSignature {
  // The arguments accepted by the component
  Args: {
    todos: Todo[];
  };
}

export default class TodoAppClearCompleted extends Component<TodoAppClearCompletedSignature> {
  @service declare todos: TodosService;

  @action
  clearCompleted() {
    const completedTodoIds = this.todos.findAll
      .filter(({ isCompleted }) => isCompleted)
      .map(({ id }) => id);
    this.todos.deleteMany(completedTodoIds);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'TodoApp::ClearCompleted': typeof TodoAppClearCompleted;
  }
}
