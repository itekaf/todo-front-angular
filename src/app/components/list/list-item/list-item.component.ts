import { Component, OnInit, Input } from '@angular/core';
import { ListModel } from '../../../../models/List.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() list: ListModel;

  constructor() { }

  ngOnInit() {
  }

}
