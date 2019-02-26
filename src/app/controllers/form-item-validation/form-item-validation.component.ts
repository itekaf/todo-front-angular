import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-item-validation',
  templateUrl: './form-item-validation.component.html',
  styleUrls: ['./form-item-validation.component.scss']
})
export class FormItemValidationComponent implements OnInit {

  @Input() errors: string[];
  @Input() class: string;
  constructor() {
    this.errors = [];
    this.class = 'form-item__validation-result';
  }

  ngOnInit() {
  }

}
