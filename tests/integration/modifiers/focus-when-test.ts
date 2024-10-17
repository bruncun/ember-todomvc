import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | focus-when', function (hooks) {
  setupRenderingTest(hooks);

  test('focuses on element when condition is true', async function (assert) {
    await render(hbs`<input {{focus-when true}} />`);

    const input = find('input');
    assert.strictEqual(document.activeElement, input);
  });
});
