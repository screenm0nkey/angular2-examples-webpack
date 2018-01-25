import {Component, Input, NgZone, OnChanges} from "@angular/core";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

@Component({
  selector: "[boxZone]",
  template: `
    <svg:rect
      [attr.dataId]="boxZone.id"
      [attr.x]="boxZone.x"
      [attr.y]="boxZone.y"
      width="20"
      height="20"
      stroke="black"
      [attr.fill]="selected ? 'red' : 'transparent'"
      strokeWidth="1"></svg:rect>
  `
})
export class BoxZoneComponent implements OnChanges {
  @Input() boxZone;
  @Input() selected;

  ngOnChanges() {
    console.log(this)
  }
}

@Component({
  selector: "speed-up-app-with-zones",
  template: `    
    <svg width="450" height="150"
         (mousedown)="mouseDown($event)"
         (mouseup)="mouseUp($event)">
      <svg:g
        *ngFor="let box of boxes"
        [boxZone]="box"
        [selected]="box.id == currentId"
      ></svg:g>
    </svg>
  `
})
export class SpeedingZonesComponent {
  currentId = null;
  boxes = [];
  offsetX:number;
  offsetY:number;
  element:HTMLElement;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.mouseMove = this.mouseMove.bind(this);
    this.generateBoxes(1000);
  }

  generateBoxes(num:number) : void {
    for (let i = 0; i < num; i++) {
      const id = i;
      const x = getRandomInt(0, 500);
      const y = getRandomInt(0, 500);
      const box = {id, x, y };
      this.boxes.push(box);
    }
  }

  mouseDown(event) {
    const index = Number(event.target.getAttribute("dataId"));
    const box = this.boxes[index];
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.currentId = index;
    this.element = event.target;
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener("mousemove", this.mouseMove);
    });
  }

  mouseMove(event) {
    event.preventDefault();
    this.element.setAttribute("x", event.clientX + this.offsetX + "px");
    this.element.setAttribute("y", event.clientY + this.offsetY + "px");
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
    window.document.removeEventListener("mousemove", this.mouseMove);
  }

  updateBox(id, x, y) {
    const box = this.boxes[id];
    box.x = x;
    box.y = y;
  }
}
