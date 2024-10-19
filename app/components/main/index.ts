import templateOnly from '@ember/component/template-only';
import type { Todo } from 'ember-todomvc/services/todos';

interface MainSignature {
  Args: {
    isAllTodosCompleted: boolean;
    todos: Todo[];
  };
}

const Main = templateOnly<MainSignature>();
export default Main;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Main: typeof Main;
  }
}
