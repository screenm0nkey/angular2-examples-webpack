import {
    Component,
    ViewChild,
    ViewContainerRef,
    ComponentRef,
    ComponentResolver,
    ComponentFactory,
    Input
} from '@angular/core';

import { Renderer } from './renderer';

@Component({
    selector: '[dcl-wrapper]',
    template: `<div #target></div>`
})
export class DclWrapperComponent {
    @ViewChild('target', { read: ViewContainerRef }) target;
    @Input() type: any;
    @Input() input: string;
    cmpRef: ComponentRef<Renderer>;
    private isViewInitialized: boolean = false;

    constructor(private resolver: ComponentResolver) { }

    updateComponent() {
        if (!this.isViewInitialized) {
            return;
        }
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        this.resolver.resolveComponent(this.type).then((factory: ComponentFactory<any>) => {
            this.cmpRef = this.target.createComponent(factory)
        });
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