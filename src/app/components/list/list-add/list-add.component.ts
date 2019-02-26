import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { ListModel } from '../../../../models/List.model';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.scss']
})
export class ListAddComponent implements OnInit {
  @Input() list: ListModel;
  @Output() addList: EventEmitter<any> = new EventEmitter();

  title: string;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const data = {
      title: this.title,
    };
    this.addList.emit(data);
  }

}
