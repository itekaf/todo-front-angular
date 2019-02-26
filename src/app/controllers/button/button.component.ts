import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type: string;
  @Input() class: string;

  constructor() {
    this.type = 'button';
    this.class = 'button button-success';
  }

  ngOnInit() {
  }
}
