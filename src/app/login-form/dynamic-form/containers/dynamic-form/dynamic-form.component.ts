import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Form} from '@angular/forms';

@Component({
    selector: 'dynamic-form',
    styleUrls: ['dyanmic-form.component.scss'],
    template: `
    <form
        class="dyanamic-form"
        [formGroup]="form">
    </form>
    `
})

//Configurable Reactive Forms in Angular with dynamic components
// url :https://ultimatecourses.com/blog/angular-dynamic-components-forms

export class DynamicFormComponent implements OnInit {

    @Input() config: any[] = [];

    form: FormGroup;

    constructor(private fb: FormBuilder){}

    ngOnInit(){
        this.form = this.createGroup();
        console.log("test");
    }

    // tslint:disable-next-line: typedef
    createGroup() {
        const group = this.fb.group({});
        this.config.forEach(control => group.addControl(control.name, this.fb.control(control.value)));
        return group;
    }


}