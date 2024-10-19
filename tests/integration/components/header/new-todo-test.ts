import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { fillIn, render, triggerKeyEvent } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import addTodo from 'ember-todomvc/tests/helpers/add-todo';
import Sinon from 'sinon';
import type { TestContext } from '@ember/test-helpers';
import type { HeaderNewTodoSignature } from 'ember-todomvc/components/header/new-todo';

interface Context extends TestContext {
  addNewTodo: HeaderNewTodoSignature['Args']['addNewTodo'];
}

module('Integration | Component | header/new-todo', function (hooks) {
  setupRenderingTest(hooks);

  const fn = Sinon.stub();

  test('it clears input and emits text on submit', async function (this: Context, assert) {
    this.set('addNewTodo', fn);
    await render<Context>(
      hbs`<Header::NewTodo @addNewTodo={{this.addNewTodo}} />`,
    );

    await addTodo('Taste JavaScript');
    assert.dom('.new-todo').hasText('');
  });

  test('it does not emit empty text', async function (this: Context, assert) {
    this.set('addNewTodo', fn);
    await render<Context>(
      hbs`<Header::NewTodo @addNewTodo={{this.addNewTodo}} />`,
    );

    await fillIn('.new-todo', '    ');
    await triggerKeyEvent('.new-todo', 'keydown', 'Enter');
    assert.dom('.new-todo').hasText('    ');
  });
});
