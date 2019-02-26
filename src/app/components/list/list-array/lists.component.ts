import { Component, OnInit } from '@angular/core';

import { ListModel } from '../../../../models/List.model';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  lists: ListModel[];
  constructor() { }

  ngOnInit() {
  }

  searchList(query) {
    this.lists = this.lists.filter( x =>
      x.title.toLocaleLowerCase().includes(query.toLocaleLowerCase));
  }

}
