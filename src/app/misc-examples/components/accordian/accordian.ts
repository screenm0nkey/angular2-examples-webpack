import {Component, ViewEncapsulation, OnDestroy} from '@angular/core';


@Component({
    selector: 'accordion, [accordion]',
    encapsulation: ViewEncapsulation.Native,
    host: {
        'class': 'panel-group'
    },
    template: '<ng-content></ng-content>'
})
class Accordion {
    private groups:Array<AccordionGroup> = [];

    addGroup(group:AccordionGroup): void {
        this.groups.push(group);
    }

    closeOthers(openGroup:AccordionGroup): void {
        this.groups.forEach((group:AccordionGroup) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }

    removeGroup(group:AccordionGroup): void {
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}



@Component({
    selector: 'accordion-group, [accordion-group]',
    inputs: ['heading', 'isOpen'],
    encapsulation: ViewEncapsulation.Native,
    template: `
    <div class="panel panel-default" [ngClass]="{'panel-open': isOpen}">
        <div class="panel-heading" (click)="toggleOpen($event)">
            <h5 class="panel-title" style="background-color: #2e6da4;">
                <a href tabindex="0"><span>{{heading}} !!!!</span></a>
            </h5>
        </div>
        <div class="panel-collapse" [hidden]="!isOpen">
            <div class="panel-body">
                <strong>Ho!</strong>
                <ng-content></ng-content>
            </div>
        </div>
    </div>`
})
class AccordionGroup implements OnDestroy {
    private _isOpen:boolean = false;

    // we're importing the component as a service
    constructor(private accordion:Accordion) {
        this.accordion.addGroup(this);
    }

    toggleOpen(event:Event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }

    ngOnDestroy(): void {
        this.accordion.removeGroup(this);
    }

    public get isOpen(): boolean {
        return this._isOpen;
    }

    public set isOpen(value:boolean) {
        this._isOpen = value;
        if (value) {
            this.accordion.closeOthers(this);
        }
    }
}



@Component({
    selector: 'accordian-component',
    template: require('./app.html'),
    directives: [Accordion, AccordionGroup]
})
export class AccordianComponent {
    isOpen:boolean = false;

    groups:Array<any> = [
        {
            heading: 'Dynamic 1',
            content: 'I am dynamic!'
        },
        {
            heading: 'Dynamic 2',
            content: 'Dynamic as well'
        }
    ];

    removeDynamic() {
        this.groups.pop();
    }
}