import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import type TodosService from 'ember-todomvc/services/todos';
import type { Todo } from 'ember-todomvc/services/todos';

export interface FooterClearCompletedSignature {
  // The arguments accepted by the component
  Args: {
    todos: Todo[];
  };
}

export default class FooterClearCompleted extends Component<FooterClearCompletedSignature> {
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
    'Footer::ClearCompleted': typeof FooterClearCompleted;
  }
}
