import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TodoModel } from '../../../../models/Todo.model';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;
  @Output() deleteTodo: EventEmitter<TodoModel> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    const classes = {
      todo: true,
      'is-compelete': this.todo.completed,
    };
    console.log(this.todo);
    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(todo).subscribe(res => console.log(res));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
