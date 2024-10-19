import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { TestContext } from '@ember/test-helpers';
import type { Filter } from 'ember-todomvc/controllers';
import type { Todo } from 'ember-todomvc/services/todos';
import { setProperties } from '@ember/object';

interface Context extends TestContext {
  isCompletedTodosEmpty: boolean;
  filter: Filter;
  todos: Todo[];
}

module('Integration | Component | footer', function (hooks) {
  setupRenderingTest(hooks);

  test('hides clear completed button when there are no completed todos', async function (this: Context, assert) {
    setProperties(this, {
      isCompletedTodosEmpty: true,
      filter: 'all',
      todos: [],
    });

    await render<Context>(
      hbs`<Footer @isCompletedTodosEmpty={{this.isCompletedTodosEmpty}} @filter={{this.filter}} @todos={{this.todos}} />`,
    );

    assert.dom('.clear-completed').doesNotExist();
  });
});
