import templateOnly from '@ember/component/template-only';
import type { Todo } from 'ember-todomvc/services/todos';
import type TodoApp from '../todo-app';

interface MainSignature {
  Args: {
    isAllTodosCompleted: boolean;
    todos: Todo[];
    updateTodos: TodoApp['updateTodos'];
    deleteTodos: TodoApp['deleteTodos'];
  };
}

const Main = templateOnly<MainSignature>();
export default Main;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Main: typeof Main;
  }
}
