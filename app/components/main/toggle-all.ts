import { assert } from '@ember/debug';
import { action } from '@ember/object';
import Component from '@glimmer/component';
import type { Todo, TodoUpdate } from 'ember-todomvc/services/todos';
import type TodoApp from '../todo-app';

export interface MainToggleAllSignature {
  // The arguments accepted by the component
  Args: {
    isAllTodosCompleted: boolean;
    todos: Todo[];
    updateTodos: TodoApp['updateTodos'];
  };
}

export default class MainToggleAll extends Component<MainToggleAllSignature> {
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

    const updates: TodoUpdate[] = this.args.todos.map(({ id }) => ({
      id,
      changes: { isCompleted: (event.target as HTMLInputElement).checked },
    }));

    this.args.updateTodos(updates);
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Main::ToggleAll': typeof MainToggleAll;
  }
}
