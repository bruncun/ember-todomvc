import { module, test } from 'qunit';
import {
  doubleClick,
  fillIn,
  triggerKeyEvent,
  visit,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-todomvc/tests/helpers';
import addTodo from '../helpers/add-todo';
import clearLocalStorage from '../helpers/clear-local-storage';

module('Acceptance | editing', function (hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(clearLocalStorage);

  test('it saves edits on enter', async function (assert) {
    await visit('/');

    await addTodo('Taste JavaScript');

    await doubleClick('.todo-list li label');
    await fillIn('.edit', 'Taste TypeScript');
    await triggerKeyEvent('.edit', 'keydown', 'Enter');

    assert.dom('.editing').doesNotExist();
    assert.dom('.todo-list li label').includesText('Taste TypeScript');
  });

  test('it saves edits on blur', async function (assert) {
    await visit('/');

    await addTodo('Taste JavaScript');

    await doubleClick('.todo-list li label');
    await fillIn('.edit', 'Taste TypeScript Twice');
    await doubleClick('.new-todo');

    assert.dom('.editing').doesNotExist();
    assert.dom('.todo-list li label').includesText('Taste TypeScript Twice');
  });

  test('it removes items when edits are empty', async function (assert) {
    await visit('/');

    await addTodo('Taste JavaScript');

    await doubleClick('.todo-list li label');
    await fillIn('.edit', '');
    await triggerKeyEvent('.edit', 'keydown', 'Enter');

    assert.dom('.todo-list li').doesNotExist();
  });

  test('it discards edits when input is escaped', async function (assert) {
    await visit('/');

    await addTodo('Taste JavaScript');

    await doubleClick('.todo-list li label');
    await fillIn('.edit', 'Taste TypeScript');
    await triggerKeyEvent('.edit', 'keydown', 'Escape');

    assert.dom('.editing').doesNotExist();
    assert.dom('.todo-list li label').includesText('Taste JavaScript');
  });
});
