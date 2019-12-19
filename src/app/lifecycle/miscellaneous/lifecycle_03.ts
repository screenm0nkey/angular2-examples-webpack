import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  IterableDiffer,
  IterableDiffers,
  KeyValueDiffer,
  KeyValueDiffers
} from '@angular/core';

@Component({
  selector: 'do-check-item',
  outputs: ['onRemove'],
  template: `
    <div style='background-color: #8a6d3b; display: table; border-radius: 5px; border:solid 5px saddlebrown'>
      <div class='event'>
        <div class='content'>
          <div class='user' style='float: left'>{{comment.author}} posted '<i>{{comment.comment}}</i>' [{{comment.likes}}
            Likes ]
          </div>
          <div class='meta'>
            <button class='pull-left' (click)='remove()'>
              Remove
            </button>
            <button class='pull-left' (click)='clear()'>
              Clear post
            </button>

          </div>
        </div>
      </div>
    </div>
  `
})
export class DoCheckItem implements DoCheck {
  @Input('comment') comment: any;
  onRemove: EventEmitter<any>;
  private differ: KeyValueDiffer<string, any>;

  constructor(differs: KeyValueDiffers) {
    this.differ = differs.find([]).create();
    this.onRemove = new EventEmitter();
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.comment);
    if (changes) {
      console.log('%cKeyValueDiffers', 'color:pink', changes);
      changes.forEachAddedItem(r => this.logChange('added', r));
      changes.forEachRemovedItem(r => this.logChange('removed', r));
      changes.forEachChangedItem(r => this.logChange('changed', r));
    }
  }

  logChange(action, r) {
    if (action === 'changed') {
      console.log(
        '%cChanged',
        'color:pink',
        r.key,
        'from',
        r.previousValue,
        'to',
        r.currentValue
      );
    }
    if (action === 'added') {
      console.log('%cAdded', 'color:pink', r.key, 'with', r.currentValue);
    }
    if (action === 'removed') {
      console.log(
        '%cRemoved',
        'color:pink',
        r.key,
        '(was ' + r.previousValue + ')'
      );
    }
  }

  remove(): void {
    this.onRemove.emit(this.comment);
  }

  clear(): void {
    delete this.comment.comment;
  }

  like(): void {
    this.comment.likes += 1;
  }
}

@Component({
  selector: 'do-check',
  template: `
    <p class='path'>/lifecycle/miscellaneous/lifecycle_03.ts</p>
    <h4>ngDoCheck and IterableDiffers, KeyValueDiffers</h4>
    <div class='links'>
      <a routerLink='/misc/templates'>Custom *ngBookRepeat template using IterableDiffer</a>
    </div>

    <p>On every system event i.e. click, timeout etc ngDoCheck is called and the component is checked, which is quite a
      lot</p>
    <p>Use<highlight>IterableDiffers on Arrays and KeyValueDiffers on Maps</highlight></p>
    <p>
      It’s important to note that the <highlight>ngOnChanges() hook gets overriden by ngDoCheck()</highlight>
      so if we implement both, OnChanges will be ignored.
    </p>

    <do-check-item
      *ngFor='let comment of comments'
      (onRemove)='removeComment($event)'
      [comment]='comment'>
    </do-check-item>
    <button style='margin-bottom: 10px' (click)='addComment()'>Add More Comments</button>
  `
})
export class DoCheckCmp implements DoCheck {
  comments: any[];
  authors: string[];
  texts: string[];
  differ: IterableDiffer<any>;

  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
    this.comments = [];
    this.authors = ['Elliot', 'Helen', 'Jenny', 'Joe', 'Justen', 'Matt'];
    this.texts = [
      'Ours is a life of constant reruns',
      'Really cool!',
      'Thanks!'
    ];
    // setTimeout will trigger ngDoCheck
    setTimeout(() => this.addComment(), 1000);
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

  getRandomItem(array: string[]): string {
    let pos: number = this.getRandomInt(array.length - 1);
    return array[pos];
  }

  addComment(): void {
    this.comments.push({
      author: this.getRandomItem(this.authors),
      comment: this.getRandomItem(this.texts),
      likes: this.getRandomInt(20)
    });
  }

  removeComment(comment) {
    let pos = this.comments.indexOf(comment);
    this.comments.splice(pos, 1);
  }

  // ngDoCheck is called every time the component is checked, which is quite a lot as it's checked on every event
  ngDoCheck(): void {
    const changes = this.differ.diff(this.comments);
    if (changes) {
      console.log('%cIterableDiffers', 'color:orange', changes);
      changes.forEachAddedItem(r =>
        console.log('%cAdded', 'color:orange', r.item)
      );
      changes.forEachRemovedItem(r =>
        console.log('%cRemoved', 'color:orange', r.item)
      );
    }
  }
}
