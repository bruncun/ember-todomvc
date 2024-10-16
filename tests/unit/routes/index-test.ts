import { module, test } from 'qunit';
import { setupTest } from 'ember-todomvc/tests/helpers';
import type IndexRoute from 'ember-todomvc/routes';
import type { Todo } from 'ember-todomvc/services/todos';
import type TodosService from 'ember-todomvc/services/todos';
import sinon from 'sinon';

module('Unit | Route | index', function (hooks) {
  setupTest(hooks);

  test('it returns an array of todos', function (assert) {
    const route = this.owner.lookup('route:index') as IndexRoute;

    const mockTodos: Todo[] = [
      { id: '1', text: 'Learn Ember', isCompleted: false },
      { id: '2', text: 'Build an app', isCompleted: true },
    ];

    const todosService = this.owner.lookup('service:todos') as TodosService;
    const getterStub = sinon.stub(todosService, 'findAll').get(() => mockTodos);

    const model = route.model();

    assert.deepEqual(
      model,
      { todos: mockTodos },
      'The model returns the mocked todos',
    );

    getterStub.restore();
  });
});
