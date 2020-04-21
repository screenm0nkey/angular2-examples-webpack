import { Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import Pet, { Cat, Dog } from './pets.model';
import { CatItemComponent } from './cat-item.component';
import { DogItemComponent } from './dog-item.component';

@Component({
  selector: 'app-member-item-container',
  template: '', //notice template is empty
})
export class MemberItemComponent implements OnInit {
  @Input() member: Pet;

  // We inject the ViewContainerRef, to have access to the view container, in which we will be able to attach the actual component
  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit(): void {
    // We first empty the view container.
    this.viewContainerRef.clear();

    const cat = this.member as Cat;
    const dog = this.member as Dog;

    if (cat.favoriteComfyPlace) { 
      const catComponentFactory = this.componentFactoryResolver.resolveComponentFactory(CatItemComponent);
      const componentRef = this.viewContainerRef.createComponent(catComponentFactory);
      // member is the name of the @input on the Cat Component i.e. @Input() member: Cat;
      componentRef.instance.member = cat;
    }
    if (dog.favoritePark) {
      const dogComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DogItemComponent);
      const componentRef = this.viewContainerRef.createComponent(dogComponentFactory);
      // member is the name of the @input on the Dog Component i.e. @Input() member: Dog;
      componentRef.instance.member = dog;
    }
  }
}
