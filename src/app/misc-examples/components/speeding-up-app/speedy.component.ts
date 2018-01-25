import {AfterViewInit, ChangeDetectorRef, Component} from "@angular/core";
import {BoxComponent} from "./box.component";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: "speed-up-app",
  template: `
    <p class="file">misc-examples/components/speeding-up-app/speedy.component.ts</p>
    <h4>How to make an app faster using detaching the change detectors and using a simpleNgFor directive</h4>
    <p><a href="https://blog.thoughtram.io/angular/2017/02/02/making-your-angular-app-fast.html" target="_blank">
      Making your angular app fast.
    </a></p>
    <svg width="450" height="150"
         (mousedown)="mouseDown($event)"
         (mousemove)="mouseMove($event)"
         (mouseup)="mouseUp($event)">
      <svg:g
        *simpleNgFor="let box of boxes"
        [box]="box"
        [selected]="box.id == currentId">
      </svg:g>
    </svg>
  `
})
export class SpeedingComponent implements AfterViewInit {
  currentBoxComponent: BoxComponent = null;
  boxes = [];
  offsetX;
  offsetY;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    for (let i = 0; i < 5000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {
        id,
        x,
        y
      };
      this.boxes.push(box);
    }
  }

  /**
   * The first thing we do is, we detach the component’s change detectors from the tree. We can inject a component’s
   * ChangeDetectorRef using DI and use its detach() method for that. The only thing we need to keep in mind is that we
   * only want to detach the change detectors after change detection has been performed for the first time, otherwise we
   * won’t see any boxes. To call detach() in the right moment, we can take advantage of Angular’s AfterViewInit life
   * cycle hook.
   */
  ngAfterViewInit() {
    this.cdr.detach();
  }

  mouseDown(event) {
    const boxComponent = event.target["BoxComponent"];
    if (boxComponent) {
      const box = boxComponent.box;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      this.offsetX = box.x - mouseX;
      this.offsetY = box.y - mouseY;
      this.currentBoxComponent = boxComponent;
      boxComponent.selected = true;
      boxComponent.update();
    }
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.currentBoxComponent !== null) {
      this.updateBox(
        this.currentBoxComponent,
        event.clientX + this.offsetX,
        event.clientY + this.offsetY
      );
      console.log(this.currentBoxComponent)
    }
  }

  mouseUp($event) {
    if (this.currentBoxComponent) {
      this.currentBoxComponent.selected = false;
      this.currentBoxComponent.update();
    }
    this.currentBoxComponent = null;
  }

  updateBox(boxComponent, x, y) {
    boxComponent.box.x = x;
    boxComponent.box.y = y;
    boxComponent.update();
  }
}
