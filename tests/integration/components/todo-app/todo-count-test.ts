import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import setMockTodos from 'ember-todomvc/tests/helpers/set-mock-todos';
import type { Context } from 'ember-todomvc/tests/helpers/types';
import type { Todo } from 'ember-todomvc/services/todos';

module('Integration | Component | todo-app/todo-count', function (hooks) {
  setupRenderingTest(hooks);

  test('it shows a count of all visible todos', async function (this: Context, assert) {
    setMockTodos(this);

    await render<Context>(hbs`<TodoApp::TodoCount @todos={{this.todos}} />`);

    assert.dom('.todo-count').hasText('2 items left');
  });

  test('it pluralizes "item" when more than 1 todo is present', async function (this: Context, assert) {
    setMockTodos(this);

    await render<Context>(hbs`<TodoApp::TodoCount @todos={{this.todos}} />`);

    assert.dom('.todo-count').hasText('2 items left');
  });

  test('it does not pluralizes "item" when only 1 todo is present', async function (this: Context, assert) {
    const mockTodo: Todo[] = [
      { id: '1', text: 'Learn Ember', isCompleted: true },
    ];
    this.set('todos', mockTodo);

    await render<Context>(hbs`<TodoApp::TodoCount @todos={{this.todos}} />`);

    assert.dom('.todo-count').hasText('1 item left');
  });
});
