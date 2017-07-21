import {Component, Input, NgZone, OnInit} from "@angular/core";


@Component({
  selector: '[box]',
  template: `
    <svg:rect
      [attr.dataId]="box.id"
      [attr.x]="box.x"
      [attr.y]="box.y"
      width="20"
      height="20"
      stroke="black"
      [attr.fill]="selected ? 'red' : 'transparent'"
      strokeWidth="1"></svg:rect>
  `
})
export class BoxComponent {
  @Input() box;
  @Input() selected;
}


@Component({
  selector: 'jordi-example',
  template: `
     <p class="path">/misc-examples/components/ng-zone/jordi-example.ts</p>
     <a href="https://blog.thoughtram.io/angular/2017/02/21/using-zones-in-angular-for-better-performance.html">Using Zones for better performance</a>
      <pre>this.zone.runOutsideAngular()</pre>

    <p>
      So the reason it's faster is because when you add a handler to an event like "mousemove" it is actually using 
      Zone.onmousemove, which triggers the change detection when the event occurs. Binding the event handler outside
      of Zone stop the change detection being tirgger. If you look at the console you will only see the change detection
      happening a few times.
    </p>
    
    <p>
      <strong>One interesting point is that the change detection for a component won't be invoked unless it is using
    any of the monkey-patched events. i.e. if there if there are no event handler like (mousedown)="mouseDown($event)"
    then the ngDoCheck() will not be called.</strong>
    </p>
    
    <p>
      Monkey-patched Hooks<br>
      For example, when we call setTimeout() we actually call Zone.setTimeout(), which in turn creates a new zone using zone.fork() in which the given handler is executed. And that’s why our hooks are executed as well, because the forked zone in which the handler will be executed, simply inherits from the parent zone.
    </p>
    
    <p>
    
</p>
    
    <svg width="550" height="550"
      (mousedown)="mouseDown($event)"
      (mouseup)="mouseUp($event)"
      >
      <svg:g
        box
        *ngFor="let box of boxes"
        [box]="box"
        [selected]="box.id == currentId"
        ></svg:g>
    </svg>
  `
})
export class JordiComponent implements OnInit {
  currentId = null;
  boxes = [];
  offsetX;
  offsetY;
  element;

  constructor(private zone: NgZone) {
    this.mouseMove = this.mouseMove.bind(this);
  }

  ngOnInit() {
    for (let i = 0; i < 10000; i++) {
      const id = i;
      const x = this.getRandomInt(0, 500);
      const y = this.getRandomInt(0, 500);
      this.boxes.push({id, x, y});
    }
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ngDoCheck(args) {
    console.log('YESSS', args);
  }

  mouseDown(event) {
    const id = Number(event.target.getAttribute("dataId"));
    const box = this.boxes[id];
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    this.offsetX = box.x - mouseX;
    this.offsetY = box.y - mouseY;
    this.currentId = id;

    this.element = event.target;
    // mouse move outside of the zone to avoid a shitload of events
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener("mousemove", this.mouseMove);
    });
  }

  mouseMove(event) {
    event.preventDefault();
    this.element.setAttribute("x", event.clientX + this.offsetX + "px");
    this.element.setAttribute("y", event.clientY + this.offsetY + "px");
  }

  // on mouseup, update the view
  mouseUp($event) {
    this.zone.run(() => {
      this.updateBox(this.currentId, $event.clientX + this.offsetX, $event.clientY + this.offsetY);
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
