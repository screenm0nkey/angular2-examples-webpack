import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {BoxComponent} from './box.component';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'speed-up-app',
  template: `
  <p class="file">misc-examples/components/speeding-up-app/speedy.component.ts</p>
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

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

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

  ngAfterViewInit() {
    this.changeDetectorRef.detach();
  }

  mouseDown(event) {
    const boxComponent = event.target['BoxComponent'];
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
      this.updateBox(this.currentBoxComponent, event.clientX + this.offsetX, event.clientY + this.offsetY);
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



