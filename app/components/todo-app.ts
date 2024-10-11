import Component from '@glimmer/component';

export interface TodoAppSignature {
  // The arguments accepted by the component
  Args: {
    todos: [];
  };
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class TodoApp extends Component<TodoAppSignature> {
  get isTodosEmpty() {
    return this.args.todos.length === 0;
  }
}
