import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { doubleClick, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { Context } from 'ember-todomvc/tests/helpers/types';
import setMockTodos from 'ember-todomvc/tests/helpers/set-mock-todos';
import type { Todo } from 'ember-todomvc/services/todos';

module('Integration | Component | todo-app/todo-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders items', async function (this: Context, assert) {
    setMockTodos(this);

    await render<Context>(hbs`<TodoApp::TodoList @todos={{this.todos}} />`);

    assert.dom('.todo-list li').exists({ count: 2 });
  });

  test('it toggles editing mode', async function (this: Context, assert) {
    const mockTodo: Todo[] = [
      { id: '1', text: 'Learn Ember', isCompleted: true },
    ];
    this.set('todos', mockTodo);

    await render<Context>(hbs`<TodoApp::TodoList @todos={{this.todos}} />`);

    await doubleClick('.todo-list li label');

    assert.dom('.todo-list li').hasClass('editing');
  });
});
