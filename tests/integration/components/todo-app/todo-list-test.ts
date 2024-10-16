import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { Todo } from 'ember-todomvc/services/todos';
import type { TestContext } from '@ember/test-helpers';

interface Context extends TestContext {
  todos: Todo[];
}

module('Integration | Component | todo-app/todo-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders items', async function (assert) {
    const mockTodos: Todo[] = [
      { id: '1', text: 'Learn Ember', isCompleted: false },
      { id: '2', text: 'Build an app', isCompleted: true },
    ];
    this.set('todos', mockTodos);

    await render<Context>(hbs`<TodoApp::TodoList @todos={{this.todos}} />`);

    assert.dom('.todo-list li').exists({ count: 2 });
  });
});
