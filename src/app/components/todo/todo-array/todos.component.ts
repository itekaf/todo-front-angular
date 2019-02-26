import { Component, OnInit } from '@angular/core';

import { TodoModel } from '../../../../models/Todo.model';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: TodoModel[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: TodoModel) {
    this.todos = this.todos.filter(x => x.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo) {
    this.todoService
      .addTodo(todo)
      .subscribe(res => {
        this.todos.push(res);
      });
  }

  searchTodo(query) {
    this.todos = this.todos.filter(
      x => x.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  }
}
