import { fillIn, triggerKeyEvent } from '@ember/test-helpers';

export async function addTodo() {
  await fillIn('.new-todo', 'Taste JavaScript');
  await triggerKeyEvent('.new-todo', 'keydown', 'Enter');
}
