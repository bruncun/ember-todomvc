import { action } from '@ember/object';
import Component from '@glimmer/component';
import { service } from '@ember/service';
import type TodosService from 'ember-todomvc/services/todos';
import type { TodoAttributes, TodoUpdate } from 'ember-todomvc/services/todos';

export interface TodoAppSignature {
  // The arguments accepted by the component
  Args: {
    isTodosEmpty: boolean;
  };
  // Any blocks yielded by the component
  Blocks: {
    header: [{ addNewTodo: TodoApp['addNewTodo'] }];
    main: [
      {
        updateTodos: TodoApp['updateTodos'];
        deleteTodos: TodoApp['deleteTodos'];
      },
    ];
    footer: [
      {
        deleteTodos: TodoApp['deleteTodos'];
      },
    ];
    info: [];
  };
}

export default class TodoApp extends Component<TodoAppSignature> {
  @service declare todos: TodosService;

  @action
  addNewTodo(attrs: TodoAttributes) {
    this.todos.createRecord(attrs);
  }

  @action
  updateTodos(updates: TodoUpdate[]) {
    this.todos.updateMany(updates);
  }

  @action
  deleteTodos(ids: string[]) {
    this.todos.deleteMany(ids);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    TodoApp: typeof TodoApp;
  }
}
