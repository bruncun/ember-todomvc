import templateOnly from '@ember/component/template-only';
import type { Todo } from 'ember-todomvc/services/todos';

export interface TodoAppTodoCountSignature {
  // The arguments accepted by the component
  Args: {
    todos: Todo[];
  };
}

const TodoAppTodoCount = templateOnly<TodoAppTodoCountSignature>();
export default TodoAppTodoCount;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'TodoApp::TodoCount': typeof TodoAppTodoCount;
  }
}
