import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  classes = {
    header: '',
    content: '',
    footer: '',
  };
  content: object;
  constructor() { }

  ngOnInit() {
  }

}
