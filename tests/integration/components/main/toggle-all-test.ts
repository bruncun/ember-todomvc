import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setMockTodos from 'ember-todomvc/tests/helpers/set-mock-todos';
import type { Context } from 'ember-todomvc/tests/helpers/types';

module('Integration | Component | main/toggle-all', function (hooks) {
  setupRenderingTest(hooks);

  test('its synced with when all todos are completed', async function (this: Context, assert) {
    setMockTodos(this);

    await render<Context>(
      hbs`<Main::ToggleAll @isAllTodosCompleted={{true}} @todos={{this.todos}} />`,
    );

    assert.dom('.toggle-all').isChecked();

    await render<Context>(
      hbs`<Main::ToggleAll @isAllTodosCompleted={{false}} @todos={{this.todos}} />`,
    );

    assert.dom('.toggle-all').isNotChecked();
  });
});
