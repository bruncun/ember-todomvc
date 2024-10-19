import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { Todo } from 'ember-todomvc/services/todos';
import { tracked } from 'tracked-built-ins';
import type TodoApp from '../todo-app';

export interface MainTodoListSignature {
  Args: {
    todos: Todo[];
    updateTodos: TodoApp['updateTodos'];
    deleteTodos: TodoApp['deleteTodos'];
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
