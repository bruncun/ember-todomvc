import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { TestContext } from '@ember/test-helpers';

interface Context extends TestContext {
  isTodosEmpty: boolean;
}

module('Integration | Component | todo-app', function (hooks) {
  setupRenderingTest(hooks);

  test('hides main and footer sections when there are no todos', async function (this: Context, assert) {
    this.set('isTodosEmpty', true);
    await render<Context>(hbs`<TodoApp @isTodosEmpty={{this.isTodosEmpty}} />`);

    assert.dom('.main').doesNotExist();
    assert.dom('.footer').doesNotExist();
  });
});
