import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { Context } from 'ember-todomvc/tests/helpers/types';
import setMockTodos from 'ember-todomvc/tests/helpers/set-mock-todos';

module('Integration | Component | todo-app/todo-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders items', async function (this: Context, assert) {
    setMockTodos(this);

    await render<Context>(hbs`<TodoApp::TodoList @todos={{this.todos}} />`);

    assert.dom('.todo-list li').exists({ count: 2 });
  });
});
