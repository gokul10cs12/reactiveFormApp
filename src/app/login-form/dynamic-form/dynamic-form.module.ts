import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from '../dynamic-form/components/form-input/form-input.component';
import { FormTexareaComponent } from '../dynamic-form/components/form-textarea/form-textarea.component';

import { DynamicFieldDirective } from '../dynamic-form/components/dynamic-field/dynamic-field.directive';
@NgModule({
  declarations: [DynamicFormComponent, FormInputComponent, DynamicFieldDirective, FormTexareaComponent ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [DynamicFormComponent],
  entryComponents: [
    FormInputComponent,
    FormTexareaComponent
  ],
})
export class DynamicFormModule {}
