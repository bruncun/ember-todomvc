import templateOnly from '@ember/component/template-only';
import type { Filter } from 'ember-todomvc/controllers';

export interface TodoAppFooterSignature {
  Args: {
    filter: Filter;
  };
}

const TodoAppFooter = templateOnly<TodoAppFooterSignature>();
export default TodoAppFooter;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'TodoApp::Footer': typeof TodoAppFooter;
  }
}
