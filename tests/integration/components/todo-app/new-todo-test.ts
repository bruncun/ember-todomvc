import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { fillIn, render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import addTodo from 'ember-todomvc/tests/helpers/add-todo';

module('Integration | Component | todo-app/new-todo', function (hooks) {
  setupRenderingTest(hooks);

  test('it clears input and emits text on submit', async function (assert) {
    await render(hbs`<TodoApp::NewTodo  />`);

    await addTodo('Taste JavaScript');
    assert.dom('.new-todo').hasText('');
  });

  test('it does not emit empty text', async function (assert) {
    await render(hbs`<TodoApp::NewTodo  />`);

    await fillIn('.new-todo', '    ');
    await triggerKeyEvent('.new-todo', 'keydown', 'Enter');
    assert.dom('.new-todo').hasText('    ');
  });
});
