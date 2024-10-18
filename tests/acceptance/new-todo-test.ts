import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-todomvc/tests/helpers';
import addTodo from '../helpers/add-todo';
import clearLocalStorage from '../helpers/clear-local-storage';

module('Acceptance | new todo', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(clearLocalStorage);

  test('adding a new todo', async function (assert) {
    await visit('/');

    await addTodo('Taste JavaScript');

    assert.dom('.todo-list li').exists({ count: 1 });
    assert.dom('.todo-list li').hasText('Taste JavaScript');
    assert.dom('.todo-count').hasText('1 item left');
  });
});
