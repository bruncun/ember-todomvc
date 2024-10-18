import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-todomvc/tests/helpers';
import addTodo from '../helpers/add-todo';

module('Acceptance | clear completed', function (hooks) {
  setupApplicationTest(hooks);

  test('it clears completed items', async function (assert) {
    await visit('/');

    await addTodo('Taste JavaScript');

    await click('.toggle');
    await click('.clear-completed');

    assert.dom('.todo-list li').doesNotExist();
  });
});
