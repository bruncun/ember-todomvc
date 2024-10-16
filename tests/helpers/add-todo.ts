import { fillIn, triggerKeyEvent } from '@ember/test-helpers';

export default async function addTodo(text: string) {
  await fillIn('.new-todo', text);
  await triggerKeyEvent('.new-todo', 'keydown', 'Enter');
}
