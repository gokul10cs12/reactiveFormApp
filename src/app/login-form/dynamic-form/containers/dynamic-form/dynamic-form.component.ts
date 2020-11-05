import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Form} from '@angular/forms';

@Component({
    selector: 'dynamic-form',
    styleUrls: ['dyanmic-form.component.scss'],
    template:  `
    <form
      class="dynamic-form"
      [formGroup]="form">
      <ng-container
        *ngFor="let field of config;"
        dynamicField
        [config]="field"
        [group]="form">
      </ng-container>
    </form>
  `,
})

//Configurable Reactive Forms in Angular with dynamic components
// url :https://ultimatecourses.com/blog/angular-dynamic-components-forms

export class DynamicFormComponent implements OnInit {

    @Input() config: any[] = [];

    form: FormGroup;

    constructor(private fb: FormBuilder){}

    // tslint:disable-next-line: typedef
    ngOnInit(){
        this.form = this.createGroup();
        console.log('test');
    }

    // tslint:disable-next-line: typedef
    createGroup() {
        const group = this.fb.group({});
        this.config.forEach(control => group.addControl(control.name, this.fb.control(control.value)));
        return group;
    }


}