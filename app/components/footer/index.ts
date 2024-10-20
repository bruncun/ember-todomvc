import templateOnly from '@ember/component/template-only';
import type { Filter } from 'ember-todomvc/controllers';
import type { Todo } from 'ember-todomvc/services/todos';
import type TodoApp from '../todo-app';

interface FooterSignature {
  Args: {
    isCompletedTodosEmpty: boolean;
    filter: Filter;
    todos: Todo[];
    deleteTodos: TodoApp['deleteTodos'];
  };
}

const Footer = templateOnly<FooterSignature>();
export default Footer;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Footer: typeof Footer;
  }
}
