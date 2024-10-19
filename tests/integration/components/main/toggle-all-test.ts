import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setMockTodos from 'ember-todomvc/tests/helpers/set-mock-todos';
import type { Context } from 'ember-todomvc/tests/helpers/types';
import Sinon from 'sinon';

module('Integration | Component | main/toggle-all', function (hooks) {
  setupRenderingTest(hooks);

  const fn = Sinon.stub();

  test('its synced with when all todos are completed', async function (this: Context, assert) {
    setMockTodos(this);
    this.set('updateTodos', fn);

    await render<Context>(
      hbs`<Main::ToggleAll @isAllTodosCompleted={{true}} @todos={{this.todos}} @updateTodos={{this.updateTodos}}/>`,
    );

    assert.dom('.toggle-all').isChecked();

    await render<Context>(
      hbs`<Main::ToggleAll @isAllTodosCompleted={{false}} @todos={{this.todos}} @updateTodos={{this.updateTodos}} />`,
    );

    assert.dom('.toggle-all').isNotChecked();
  });
});
