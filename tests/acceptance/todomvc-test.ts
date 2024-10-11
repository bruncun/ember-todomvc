import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-todomvc/tests/helpers';

module('Acceptance | todomvc', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.dom('h1').hasText('todos');
  });
});
