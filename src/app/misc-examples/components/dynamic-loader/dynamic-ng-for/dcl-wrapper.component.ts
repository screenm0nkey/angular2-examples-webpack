import {
    Component,
    ViewChild,
    ViewContainerRef,
    ComponentRef,
    ComponentResolver,
    ComponentFactory,
    Input,
    OnChanges,
    OnInit,
    OnDestroy,
    AfterViewInit
} from '@angular/core';

import { Renderer } from './renderer';

@Component({
    selector: '[dcl-wrapper]',
    template: `<div #target></div>`
})
export class DclWrapperComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    @ViewChild('target', { read: ViewContainerRef }) target;
    @Input() renderer: any;
    @Input() input: string;
    cmpRef: ComponentRef<Renderer>;
    private isViewInitialized: boolean = false;

    constructor(private resolver: ComponentResolver) {}

    updateComponent() {
        if (!this.isViewInitialized) {
            return;
        }
        this.ngOnDestroy();
        this.resolver.resolveComponent(this.renderer).then((factory: ComponentFactory<any>) => {
            this.cmpRef = this.target.createComponent(factory);
            this.cmpRef.instance.input = this.input; // this assings string value from the app.component i.e. one, two
        });
    }
    ngOnInit() {
        console.log(12, this.input);
    }
    ngOnChanges() {
        this.updateComponent();
    }
    ngAfterViewInit() {
        this.isViewInitialized = true;
        this.updateComponent();
    }
    ngOnDestroy() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}