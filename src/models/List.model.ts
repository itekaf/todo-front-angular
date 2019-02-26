import { TodoModel } from './Todo.model';
import { UserModel } from './User.model';

export class ListModel {
  id: string;
  title: string;
  todos: TodoModel[];
  users: UserModel[];

  description?: string;
}
