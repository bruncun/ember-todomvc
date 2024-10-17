import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { Todo } from 'ember-todomvc/services/todos';
import { tracked } from 'tracked-built-ins';

export interface TodoAppTodoListSignature {
  Args: {
    todos: Todo[];
  };
}

export default class TodoAppTodoList extends Component<TodoAppTodoListSignature> {
  @tracked editing: null | string = null;

  @action
  toggleEditing(id?: string) {
    this.editing = id ?? null;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'TodoApp::TodoList': typeof TodoAppTodoList;
  }
}
