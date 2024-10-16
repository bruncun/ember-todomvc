import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-todomvc/tests/helpers';
import addTodo from '../helpers/add-todo';

module('Acceptance | item interactions', function (hooks) {
  setupApplicationTest(hooks);

  test('it toggles individual items complete', async function (assert) {
    await visit('/');

    await addTodo('Taste JavaScript');

    await click('.toggle');
    assert.dom('.completed').exists();
  });

  test('it removes individual items', async function (assert) {
    await visit('/');

    await addTodo('Taste JavaScript');

    await click('.destroy');
    assert.dom('.todo-list li').doesNotExist();
  });
});
