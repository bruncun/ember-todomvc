import { module, test } from 'qunit';
import { setupTest } from 'ember-todomvc/tests/helpers';
import type TodosService from 'ember-todomvc/services/todos';
import type { Context } from 'ember-todomvc/tests/helpers/types';

let todos: TodosService;
module('Unit | Service | todos', function (hooks) {
  setupTest(hooks);

  const newTodo = { id: '1', text: 'Buy eggs', isCompleted: false };

  hooks.beforeEach(function () {
    todos = this.owner.lookup('service:todos');
  });

  test('it creates todos', function (assert) {
    todos.createRecord(newTodo);
    assert.deepEqual(todos.data.get('1'), newTodo);
  });

  test('it returns all todos', function (assert) {
    todos.createRecord(newTodo);

    const values = [...todos.findAll.values()];
    assert.strictEqual(values.length, 1);
    assert.deepEqual(values[0], newTodo);
  });

  test('it updates many todos', function (this: Context, assert) {
    todos.createRecord(newTodo);
    todos.createRecord({ id: '2', text: 'Make breakfast', isCompleted: false });

    todos.updateMany([
      { id: '1', changes: { isCompleted: true } },
      { id: '2', changes: { isCompleted: true } },
    ]);

    const isAllTodosCompleted = todos.findAll.every(
      ({ isCompleted }) => isCompleted,
    );

    assert.true(isAllTodosCompleted);
  });

  test('it deletes many todos', function (this: Context, assert) {
    todos.createRecord(newTodo);
    todos.createRecord({ id: '2', text: 'Make breakfast', isCompleted: false });

    todos.deleteMany(['1', '2']);

    assert.strictEqual(todos.findAll.length, 0);
  });

  test('it persists todos to local storage', async function (assert) {
    todos.createRecord(newTodo);

    const storedTodos = JSON.parse(localStorage.getItem('todos-ember') || '[]');

    assert.strictEqual(storedTodos.length, 1);
  });

  test('it loads todos from local storage', async function (assert) {
    localStorage.setItem(
      'todos-ember',
      '[{"id":"e2763ae9-0456-451f-9a8f-4e346e02c5c3","text":"foo","isCompleted":false}]',
    );

    todos.load();

    assert.strictEqual(todos.findAll.length, 1);
  });
});
