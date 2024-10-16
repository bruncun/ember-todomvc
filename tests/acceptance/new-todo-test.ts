import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-todomvc/tests/helpers';
import { addTodo } from '../helpers/add-todo';

module('Acceptance | new todo', function (hooks) {
  setupApplicationTest(hooks);

  test('adding a new todo', async function (assert) {
    await visit('/');

    await addTodo();

    assert.dom('.todo-list li').exists({ count: 1 });
    assert.dom('.todo-list li').hasText('Taste JavaScript');
  });
});
