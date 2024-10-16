import { module, test } from 'qunit';
import { setupTest } from 'ember-todomvc/tests/helpers';

module('Unit | Service | todos', function (hooks) {
  setupTest(hooks);

  const newTodo = { id: '1', text: 'buy eggs', isCompleted: false };

  test('it exists', function (assert) {
    const service = this.owner.lookup('service:todos');
    assert.ok(service);
  });

  test('it creates todos', function (assert) {
    const service = this.owner.lookup('service:todos');
    service.createRecord(newTodo);
    assert.deepEqual(service.data.get('1'), newTodo);
  });

  test('it returns all todos', function (assert) {
    const service = this.owner.lookup('service:todos');

    service.createRecord(newTodo);

    const values = [...service.findAll.values()];
    assert.strictEqual(values.length, 1);
    assert.deepEqual(values[0], newTodo);
  });
});
