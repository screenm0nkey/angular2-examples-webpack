import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from "@angular/core";



@Component({
  selector: 'detect-changes',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <p class="path">/misc-examples/components/immutable/detect-changes.ts</p>
    <h4>this.ref.detectChanges()</h4>
    <a href="https://stackoverflow.com/questions/41364386/whats-the-difference-between-markforcheck-and-detectchanges" target="_blank">detectChanges vs markForCheck</a>
    
    <p>ngDoCheck will get called even if the changeDetector is detached</p>
    
    <p>
      The Buttons are missing the text becuause the text is interpolated and the ref is detached. <br>
      Try clicking the "Manually detect button" and the buttons will update.
      Then reattach the ref and start the interval. You can then see what happening.
    </p>
    
    <button (click)="startStopInterval()">{{start ? 'Stop' : 'Start'}} Interval</button>
    Number of ticks: {{numberOfTicks}}
    
     <button (click)="detachRef()">{{attached ? 'Detach' : 'Reattach'}} ChangeDetector</button>
     
     <button (click)="detectChanges()">Manually detect changes</button>
  `
})
export class DetectChanges {
  start: boolean = false;
  numberOfTicks = 0;
  id: any = 0;
  attached: boolean;

  constructor(private ref: ChangeDetectorRef) {
    ref.detach();
  }

  ngDoCheck() {
    console.log('%cngDoCheck detect-changes', 'color:pink');
  }

  detectChanges() {
    if (!this.attached) {
      this.ref.reattach();
      this.ref.detectChanges();
      this.ref.detach();
    } else {
      this.ref.detectChanges();
    }
  }

  detachRef(){
    this.attached = !this.attached;
    if (this.attached) {
      this.ref.detach();
    }
    else {
      this.ref.reattach();
    }
  }

  startStopInterval() {
    clearInterval(this.id);
    this.start = !this.start;
    if (this.start) {
      this.id = setInterval(() => {
        this.numberOfTicks++;
      }, 1000);
    }
  }
}



