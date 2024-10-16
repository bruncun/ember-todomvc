import templateOnly, {
  type TemplateOnlyComponent,
} from '@ember/component/template-only';
import type { Todo } from 'ember-todomvc/services/todos';

export interface TodoAppTodoListSignature {
  Args: {
    todos: Todo[];
  };
}

let TodoAppTodoList: TemplateOnlyComponent<TodoAppTodoListSignature>;
export default TodoAppTodoList = templateOnly();

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    'TodoApp::TodoList': typeof TodoAppTodoList;
  }
}
