import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {BoxComponent} from './box.component';

interface Box {
  x: number;
  y: number;
  id: number;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: 'speedy-component',
  template: `
    <svg width='450' height='150'
         (mousedown)='mouseDown($event)'
         (mousemove)='mouseMove($event)'
         (mouseup)='mouseUp($event)'>
      <svg:g
        *simpleNgFor='let box of boxes'
        [box]='box'
        [selected]='box.id == currentId'>
      </svg:g>
    </svg>
  `
})
export class SpeedingComponent implements AfterViewInit {
  activeBox: BoxComponent;
  boxes: Box[] = [];
  offsetX;
  offsetY;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {id, x, y};
      this.boxes.push(box);
    }
  }

  ngAfterViewInit() {
    this.cdr.detach();
  }

  mouseDown(event) {
    const boxComponent: BoxComponent = event.target['BoxComponent'];
    if (boxComponent) {
      const box: Box = boxComponent.box;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      this.offsetX = box.x - mouseX;
      this.offsetY = box.y - mouseY;
      this.activeBox = boxComponent;
      boxComponent.selected = true;
      // boxComponent.update();
    }
  }

  mouseMove(event) {
    event.preventDefault();
    if (this.activeBox) {
      this.updateBox(
        this.activeBox,
        event.clientX + this.offsetX,
        event.clientY + this.offsetY
      );
      console.log(this.activeBox)
    }
  }

  mouseUp($event) {
    if (this.activeBox) {
      this.activeBox.selected = false;
      this.activeBox.update();
    }
    this.activeBox = null;
  }

  updateBox(boxComponent, x, y) {
    boxComponent.box.x = x;
    boxComponent.box.y = y;
    boxComponent.update();
  }
}
