import { module, test } from 'qunit';
import { click, findAll, visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-todomvc/tests/helpers';
import addTodo from '../helpers/add-todo';

module('Acceptance | routing', function (hooks) {
  setupApplicationTest(hooks);

  test('shows all todos on load', async function (assert) {
    await visit('/');

    await addTodo('Taste JavaScript');
    await addTodo('Learn Ember');

    const links = findAll('a');
    const link = links.find((el) => el.textContent?.trim() === 'All');

    assert.dom('.todo-list li').exists({ count: 2 });
    assert.dom(link).hasClass('selected', 'The element has the selected class');
  });

  test('filters for active todos', async function (assert) {
    await visit('/?filter=active');

    await click('.toggle:first-of-type');

    const links = findAll('a');
    const link = links.find((el) => el.textContent?.trim() === 'Active');

    assert.dom('.todo-list li').exists({ count: 1 });
    assert.dom('.todo-list li.completed').doesNotExist();
    assert.dom(link).hasClass('selected', 'The element has the selected class');
  });

  test('filters for completed todos', async function (assert) {
    await visit('/?filter=completed');

    const links = findAll('a');
    const link = links.find((el) => el.textContent?.trim() === 'Completed');

    assert.dom('.todo-list li').exists({ count: 1 });
    assert.dom('.todo-list li:not(.completed)').doesNotExist();
    assert.dom(link).hasClass('selected', 'The element has the selected class');
  });
});
