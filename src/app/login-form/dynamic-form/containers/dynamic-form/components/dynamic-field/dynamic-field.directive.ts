import {ComponentFactoryResolver, Directive,Input, OnInit, ViewContainerRef} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormInputComponent} from '../form-input/form-input.component';
@Directive({
    selector: '[dynamicField]',
})

const components = {
    input: FormInputComponent,
  };
export class DynamicFieldDirective implements OnInit{
    @Input() config;
    @Input() group: FormGroup;
    component;
    constructor(
        private resolver : ComponentFactoryResolver,
        private container: ViewContainerRef
    ){}
    ngOnInit(){

        const component = components[this.config.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
    }
}