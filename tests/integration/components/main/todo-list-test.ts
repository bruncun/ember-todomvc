import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { doubleClick, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { Context } from 'ember-todomvc/tests/helpers/types';
import setMockTodos from 'ember-todomvc/tests/helpers/set-mock-todos';
import type { Todo } from 'ember-todomvc/services/todos';
import Sinon from 'sinon';

module('Integration | Component | main/todo-list', function (hooks) {
  setupRenderingTest(hooks);

  const fn = Sinon.stub();

  test('it renders items', async function (this: Context, assert) {
    setMockTodos(this);
    this.set('updateTodos', fn);
    this.set('deleteTodos', fn);

    await render<Context>(
      hbs`<Main::TodoList @todos={{this.todos}} @updateTodos={{this.updateTodos}} @deleteTodos={{this.deleteTodos}}/>`,
    );

    assert.dom('.todo-list li').exists({ count: 2 });
  });

  test('it toggles editing mode', async function (this: Context, assert) {
    const mockTodo: Todo[] = [
      { id: '1', text: 'Learn Ember', isCompleted: true },
    ];
    this.set('todos', mockTodo);

    await render<Context>(
      hbs`<Main::TodoList @todos={{this.todos}} @updateTodos={{this.updateTodos}} @deleteTodos={{this.deleteTodos}}/>`,
    );

    await doubleClick('.todo-list li label');

    assert.dom('.todo-list li').hasClass('editing');
  });
});
