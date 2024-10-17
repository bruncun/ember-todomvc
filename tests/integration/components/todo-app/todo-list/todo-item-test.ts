import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { TodoAppTodoListTodoItemSignature } from 'ember-todomvc/components/todo-app/todo-list/todo-item';
import { setProperties } from '@ember/object';

module(
  'Integration | Component | todo-app/todo-list/todo-item',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it focuses on input when entering editing mode', async function (this: TodoAppTodoListTodoItemSignature['Args'], assert) {
      setProperties(this, {
        todo: { id: '1', text: 'Buy eggs', isCompleted: false },
        toggleEditing: (id?: string) => id,
        isEditing: true,
      });

      await render<TodoAppTodoListTodoItemSignature['Args']>(
        hbs`<TodoApp::TodoList::TodoItem @isEditing={{this.isEditing}} @todo={{this.todo}} @toggleEditing={{this.toggleEditing}} />`,
      );

      const edit = find('.edit');
      assert.strictEqual(document.activeElement, edit);
    });
  },
);
