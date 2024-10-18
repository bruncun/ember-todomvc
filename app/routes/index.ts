import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import type { Todo } from 'ember-todomvc/services/todos';
import type TodosService from 'ember-todomvc/services/todos';

export default class IndexRoute extends Route {
  @service declare todos: TodosService;

  beforeModel() {
    this.todos.load();
  }

  model() {
    const todosService = this.todos;

    return {
      get todos(): Todo[] {
        return todosService.findAll;
      },
    };
  }
}
