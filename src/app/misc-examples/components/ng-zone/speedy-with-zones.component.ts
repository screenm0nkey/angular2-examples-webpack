import { Component, Input, NgZone, OnChanges } from '@angular/core';

interface Box {
  id: number;
  x: number;
  y: number;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: '[boxZone]',
  template: `
    <svg:rect
      [attr.dataId]='boxZone.id'
      [attr.x]='boxZone.x'
      [attr.y]='boxZone.y'
      width='20'
      height='20'
      stroke='black'
      [attr.fill]="selected ? 'red' : 'transparent'"
      strokeWidth='1'></svg:rect>
  `
})
export class BoxZoneComponent implements OnChanges {
  @Input() boxZone;
  @Input() selected;

  ngOnChanges() {
    // console.log('ngOnChanges', this)
  }
}

@Component({
  selector: 'speed-up-app-with-zones',
  template: `
    <svg width='450' height='150'
         (mousedown)='mouseDown($event)'
         (mouseup)='mouseUp($event)'>
      <svg:g
        *ngFor='let box of boxes'
        [boxZone]='box'
        [selected]='box.id == currentId'
      ></svg:g>
    </svg>
  `
})
export class SpeedingZonesComponent {
  currentId = null;
  boxes: Box[] = [];
  offsetX: number;
  offsetY: number;
  element: HTMLElement;

  constructor(public zone: NgZone) {
  }

  ngOnInit() {
    this.mouseMove = this.mouseMove.bind(this);
    this.generateBoxes(10000);
  }

  generateBoxes(num: number): void {
    for (let i = 0; i < num; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box: Box = { id, x, y };
      this.boxes.push(box);
    }
  }

  mouseDown(event) {
    const index = Number(event.target.getAttribute('dataId'));
    const box = this.boxes[index];
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.currentId = index;
    this.element = event.target;

    // we are running the mousemove event outisde of ngZone to stop the change detection being invoked on every box
    // each time the mousemove event occurs.
    // to prove just how slow it can be, move the addEventListener line of code outside of the runOutsideAngular
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', this.mouseMove);
    });
  }

  mouseMove(event) {
    event.preventDefault();
    this.element.setAttribute('x', event.clientX + this.offsetX + 'px');
    this.element.setAttribute('y', event.clientY + this.offsetY + 'px');
  }

  mouseUp($event) {
    this.zone.run(() => {
      this.updateBox(
        this.currentId,
        $event.clientX + this.offsetX,
        $event.clientY + this.offsetY
      );
      this.currentId = null;
    });
    window.document.removeEventListener('mousemove', this.mouseMove);
  }

  updateBox(id, x, y) {
    const box = this.boxes[id];
    box.x = x;
    box.y = y;
  }
}
