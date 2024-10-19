import templateOnly from '@ember/component/template-only';
import type { Todo } from 'ember-todomvc/services/todos';

export interface FooterTodoCountSignature {
  // The arguments accepted by the component
  Args: {
    todos: Todo[];
  };
}

const FooterTodoCount = templateOnly<FooterTodoCountSignature>();
export default FooterTodoCount;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'Footer::TodoCount': typeof FooterTodoCount;
  }
}
