import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-form-item-wrapper',
  templateUrl: './form-item-wrapper.component.html',
  styleUrls: ['./form-item-wrapper.component.scss']
})
export class FormItemWrapperComponent implements OnInit {

  @Input() labelTemplate: TemplateRef<any>;
  @Input() contentTemplate: TemplateRef<any>;
  @Input() validationTemplate: TemplateRef<any>;
  @Input() classes: string;
  @Input() errors: string[];

  constructor() {
    this.errors = [];
    this.classes = 'form-item-wrapper';
  }

  ngOnInit() {
  }
}
