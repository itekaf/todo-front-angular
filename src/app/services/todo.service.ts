import { Injectable } from '@angular/core';
import { TodoModel } from '../../models/Todo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = 'http://localhost:4000';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoModel[]> {
    const url = `${this.todosUrl}${this.todosLimit}`;
    return this.http.get<TodoModel[]>(url);
  }

  addTodo(todo: TodoModel): Observable<TodoModel> {
    const url = `${this.todosUrl}`;
    return this.http.post<TodoModel>(url, todo, httpOptions);
  }
  deleteTodo(todo: TodoModel): Observable<TodoModel> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<TodoModel>(url, httpOptions);
  }
  updateTodo(todo: TodoModel): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
}
