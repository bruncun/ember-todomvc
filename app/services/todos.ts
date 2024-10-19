import Service from '@ember/service';
import { TrackedMap, TrackedObject } from 'tracked-built-ins';

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface TodoUpdate {
  id: string;
  changes: Partial<Todo>;
}

export type TodoAttributes = Pick<Todo, 'text' | 'isCompleted'> & {
  id?: string;
};

export default class TodosService extends Service {
  data = new TrackedMap<string, Todo>();

  get findAll() {
    return [...this.data.values()];
  }

  createRecord(attrs: TodoAttributes) {
    const id = attrs.id ?? self.crypto.randomUUID();
    this.data.set(id, new TrackedObject({ id, ...attrs }));
    this.save();
  }

  updateMany(updates: TodoUpdate[]) {
    updates.forEach(({ id, changes }) => {
      const todo = this.data.get(id);
      if (!todo) return null;
      this.data.set(id, new TrackedObject({ ...todo, ...changes }));
    });
    this.save();
  }

  deleteMany(ids: string[]) {
    ids.forEach((id) => {
      this.data.delete(id);
    });
    this.save();
  }

  load() {
    const todos = JSON.parse(
      localStorage.getItem('todos-ember') || '[]',
    ) as Todo[];
    const newData = todos.reduce((acc, cur) => {
      acc.set(cur.id, new TrackedObject({ ...cur }));
      return acc;
    }, new TrackedMap<string, Todo>());

    this.data = newData;
  }

  save() {
    localStorage.setItem('todos-ember', JSON.stringify(this.findAll));
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:todos-service')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('todos-service') declare altName: TodosServiceService;`.
declare module '@ember/service' {
  interface Registry {
    todos: TodosService;
  }
}
