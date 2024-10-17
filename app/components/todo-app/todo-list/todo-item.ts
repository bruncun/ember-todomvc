import { assert } from '@ember/debug';
import { action } from '@ember/object';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import type TodosService from 'ember-todomvc/services/todos';
import type { Todo } from 'ember-todomvc/services/todos';
import { tracked } from 'tracked-built-ins';

export interface TodoAppTodoListTodoItemSignature {
  // The arguments accepted by the component
  Args: {
    todo: Todo;
    isEditing?: true;
    toggleEditing: (id?: string) => void;
  };
}

export default class TodoAppTodoListTodoItem extends Component<TodoAppTodoListTodoItemSignature> {
  @service declare todos: TodosService;
  @tracked newText: string = this.args.todo.text;

  @action
  handleKeydown(event: KeyboardEvent) {
    assert(
      'handleKeydown must be bound to an input element',
      event.target instanceof HTMLInputElement,
    );

    if (event.key === 'Enter') {
      event.target.blur();
    }

    if (event.key === 'Escape') {
      this.args.toggleEditing();
      this.newText = this.args.todo.text;
    }
  }

  @action
  edit(event: FocusEvent) {
    assert(
      'edit must be bound to an input element',
      event.target instanceof HTMLInputElement,
    );

    const text = this.newText.trim();

    if (text !== '') {
      this.todos.updateMany([{ id: this.args.todo.id, changes: { text } }]);
    } else {
      this.todos.deleteMany([this.args.todo.id]);
    }
    this.args.toggleEditing();
  }

  @action
  toggleComplete(event: Event) {
    assert(
      'toggleComplete must be bound to an input element',
      event.target instanceof HTMLInputElement,
    );
    assert(
      'toggleComplete must be bound to an input element with a "checked" property',
      'checked' in event.target,
    );

    this.todos.updateMany([
      {
        id: this.args.todo.id,
        changes: { isCompleted: (event.target as HTMLInputElement).checked },
      },
    ]);
  }

  @action
  delete() {
    this.todos.deleteMany([this.args.todo.id]);
  }

  @action
  toggleEditing(event: Event) {
    assert(
      'toggleEditing must be bound to an input element',
      event.target instanceof HTMLLabelElement,
    );

    this.args.toggleEditing(this.args.todo.id);
  }

  @action
  updateNewText(event: Event) {
    assert(
      'updateText must be bound to an input element',
      event.target instanceof HTMLInputElement,
    );

    this.newText = event.target.value;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'TodoApp::TodoList::TodoItem': typeof TodoAppTodoListTodoItem;
  }
}
