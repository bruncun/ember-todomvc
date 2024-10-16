import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { render, type TestContext } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { Todo } from 'ember-todomvc/services/todos';

interface Context extends TestContext {
  todos: Todo[];
}

module('Integration | Component | todo-app', function (hooks) {
  setupRenderingTest(hooks);

  test('hides main and footer sections when there are no todos', async function (assert) {
    this.set('todos', []);
    await render<Context>(hbs`<TodoApp @todos={{this.todos}} />`);

    assert.dom('.main').doesNotExist();
    assert.dom('.footer').doesNotExist();
  });
});
