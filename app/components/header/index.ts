import templateOnly from '@ember/component/template-only';
import type TodoApp from '../todo-app';

export interface HeaderSignature {
  addNewTodo: TodoApp['addNewTodo'];
}

const Header = templateOnly<HeaderSignature>();
export default Header;

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Header: typeof Header;
  }
}
