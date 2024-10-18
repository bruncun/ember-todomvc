import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-todomvc/tests/helpers';
import { findAll, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import type { TestContext } from '@ember/test-helpers';
import type { Filter } from 'ember-todomvc/controllers';

interface Context extends TestContext {
  filter: Filter;
}

module('Integration | Component | todo-app/footer', function (hooks) {
  setupRenderingTest(hooks);

  test('it toggles the selected class on filter links', async function (this: Context, assert) {
    let links, link;
    this.set('filter', 'completed');

    await render<Context>(hbs`<TodoApp::Footer @filter={{this.filter}} />`);

    links = findAll('a');
    link = links.find((el) => el.textContent?.trim() === 'Completed');

    assert.dom(link).hasClass('selected', 'The element has the selected class');

    this.set('filter', 'active');

    await render<Context>(hbs`<TodoApp::Footer @filter={{this.filter}} />`);

    links = findAll('a');
    link = links.find((el) => el.textContent?.trim() === 'Active');

    assert.dom(link).hasClass('selected', 'The element has the selected class');

    this.set('filter', 'all');

    await render<Context>(hbs`<TodoApp::Footer @filter={{this.filter}} />`);

    links = findAll('a');
    link = links.find((el) => el.textContent?.trim() === 'All');

    assert.dom(link).hasClass('selected', 'The element has the selected class');
  });
});
