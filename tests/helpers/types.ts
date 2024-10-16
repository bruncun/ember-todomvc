import type { TestContext } from '@ember/test-helpers';
import type { Todo } from 'ember-todomvc/services/todos';

export interface Context extends TestContext {
  todos: Todo[];
}
