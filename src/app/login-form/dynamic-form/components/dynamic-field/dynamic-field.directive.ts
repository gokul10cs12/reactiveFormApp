import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormTexareaComponent } from '../form-textarea/form-textarea.component';


const components = {
    input: FormInputComponent,
    textarea: FormTexareaComponent
};

@Directive({
    selector: '[dynamicField]'
})

export class DynamicFieldDirective implements OnInit {
    @Input() config;

    @Input() group: FormGroup;
    component;
    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) { }

    ngOnInit() {
        console.log(this.config.type);
        const component = components[this.config.type];
        const factory = this.resolver.resolveComponentFactory<any>(component);
        this.component = this.container.createComponent(factory);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
 
}
}