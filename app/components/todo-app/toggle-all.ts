import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import type { Todo } from 'ember-todomvc/services/todos';
import type TodosService from 'ember-todomvc/services/todos';

export interface TodoAppToggleAllSignature {
  // The arguments accepted by the component
  Args: {
    isAllTodosCompleted: boolean;
    todos: Todo[];
  };
}

export default class TodoAppToggleAll extends Component<TodoAppToggleAllSignature> {
  @service declare todos: TodosService;

  @action
  toggleAllTodos(event: Event) {
    assert(
      'toggleAllTodos must be bound to an input element',
      event.target instanceof HTMLInputElement,
    );
    assert(
      'toggleAllTodos must be bound to an input element with a "checked" property',
      'checked' in event.target,
    );

    const updates = this.args.todos.map(({ id }) => ({
      id,
      changes: { isCompleted: (event.target as HTMLInputElement).checked },
    }));

    this.todos.updateMany(updates);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'TodoApp::ToggleAll': typeof TodoAppToggleAll;
  }
}
