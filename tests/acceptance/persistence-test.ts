import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-todomvc/tests/helpers';

module('Acceptance | persistence', function (hooks) {
  setupApplicationTest(hooks);

  hooks.before(function () {
    localStorage.setItem(
      'todos-ember',
      '[{"id":"48eb4614-9953-4b2c-a2a0-bc26fd73f558","text":"Taste JavaScript","isCompleted":false}]',
    );
  });

  test('persists todos between visits', async function (assert) {
    await visit('/');
    assert.dom('.todo-list li').hasText('Taste JavaScript');
  });
});
