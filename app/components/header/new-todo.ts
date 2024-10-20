import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { assert } from '@ember/debug';
import type TodoApp from '../todo-app';

export interface HeaderNewTodoSignature {
  Args: {
    addNewTodo: TodoApp['addNewTodo'];
  };
}

export default class HeaderNewTodo extends Component<HeaderNewTodoSignature> {
  @tracked text: string = '';

  @action
  addNewTodo(event: KeyboardEvent) {
    assert(
      'addNewTodo must be bound to an input element',
      event.target instanceof HTMLInputElement,
    );

    const text = this.text.trim();

    if (event.key === 'Enter' && text !== '') {
      this.args.addNewTodo({ text, isCompleted: false });
      this.text = '';
    }
  }

  @action
  updateText(event: Event) {
    assert(
      'updateText must be bound to an input element',
      event.target instanceof HTMLInputElement,
    );

    this.text = event.target.value;
  }
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Header::NewTodo': typeof HeaderNewTodo;
  }
}
