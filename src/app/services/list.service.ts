import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ListModel } from '../../models/List.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  listsUri: '';
  listsLimit: '';

  constructor(private http: HttpClient) { }

  getLists(): Observable<ListModel[]> {
    const url = `${this.listsUri}${this.listsLimit}`;
    return this.http.get<ListModel[]>(url);
  }
  addList(list: ListModel) {}
  removeList(list: ListModel) {}
  updateList(list: ListModel) {}
}
