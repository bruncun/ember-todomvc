import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-todomvc/tests/helpers';
import { click, visit, findAll } from '@ember/test-helpers';
import type { Context } from '../helpers/types';
import addTodo from '../helpers/add-todo';

interface ToggleAllContext extends Context {
  isAllTodosCompleted: boolean;
}

module('Acceptance | mark all as completed', function (hooks) {
  setupApplicationTest(hooks);

  test('it toggles completed state for all todos', async function (this: ToggleAllContext, assert) {
    await visit('/');

    await addTodo('Taste JavaScript');
    await addTodo('Learn Ember');

    await click('.toggle-all');

    const checkboxes = findAll('.toggle');

    checkboxes.forEach((checkbox) => {
      assert.dom(checkbox).isChecked();
    });
  });
});
