import Service from '@ember/service';
import { TrackedMap, TrackedObject } from 'tracked-built-ins';

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface TodoUpdate {
  id: string;
  changes: Partial<Todo>;
}

type TodoAttributes = Pick<Todo, 'text' | 'isCompleted'> & {
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
  }

  updateMany(updates: TodoUpdate[]) {
    updates.forEach(({ id, changes }) => {
      const todo = this.data.get(id);
      if (!todo) return null;
      this.data.set(id, new TrackedObject({ ...todo, ...changes }));
    });
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
