import {Component, ViewContainerRef} from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
@Component({
    selector: 'form-textarea',
    styleUrls: ['form-textarea.component.css'],
    template:  `
    <div 
      class="dynamic-field form-textarea" 
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <textarea
        [attr.value]="config.value"
        [formControlName]="config.name" > </textarea>
    </div>
  `,
})
export class FormTexareaComponent{
    config;
    group: FormGroup;
    
}
