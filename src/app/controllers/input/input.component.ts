import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() class: string;
  @Input() type: string;
  @Input() placeholder: string;
  @Input() value: string;
  @Input() name: string;

  constructor() {
    this.type = 'text';
  }

  ngOnInit() {
  }

}
