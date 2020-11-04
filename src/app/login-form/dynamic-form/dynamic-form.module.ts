import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './containers/dynamic-form/components/form-input/form-input.component'
@NgModule({
  declarations: [DynamicFormComponent,FormInputComponent ],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [DynamicFormComponent],
})
export class DynamicFormModule {}
