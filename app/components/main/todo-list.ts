import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { Todo } from 'ember-todomvc/services/todos';
import { tracked } from 'tracked-built-ins';

export interface MainTodoListSignature {
  Args: {
    todos: Todo[];
  };
}

export default class MainTodoList extends Component<MainTodoListSignature> {
  @tracked editing: null | string = null;

  @action
  toggleEditing(id?: string) {
    this.editing = id ?? null;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Main::TodoList': typeof MainTodoList;
  }
}
