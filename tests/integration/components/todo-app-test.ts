import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { Context } from 'ember-todomvc/tests/helpers/types';

module('Integration | Component | todo-app', function (hooks) {
  setupRenderingTest(hooks);

  test('hides main and footer sections when there are no todos', async function (assert) {
    this.set('todos', []);
    await render<Context>(hbs`<TodoApp @todos={{this.todos}} />`);

    assert.dom('.main').doesNotExist();
    assert.dom('.footer').doesNotExist();
  });

  test('hides clear completed button when there are no completed todos', async function (this: Context, assert) {
    const todos = [{ id: '1', isCompleted: false, text: 'Taste JavaScript' }];
    this.set('todos', todos);

    await render<Context>(hbs`<TodoApp @todos={{this.todos}} />`);

    assert.dom('.clear-completed').doesNotExist();
  });
});
