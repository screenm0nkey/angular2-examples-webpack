import {Component, Input, IterableDiffers, KeyValueDiffers, EventEmitter, DoCheck} from "@angular/core";


@Component({
  selector: 'do-check-item',
  outputs: ['onRemove'],
  template: `
  <div class="ui feed">
    <div class="event">
      <div class="content">
        <div class="summary">
          <a class="user">
            {{comment.author}}
          </a> posted a comment
          <div class="date">
            1 Hour Ago
          </div>
        </div>
        <div class="extra text">
          {{comment.comment}}
        </div>
        <div class="meta">
          <div class="pull-left" (click)="remove()">
            <i class="trash icon"></i> Remove
          </div>
          <div class="pull-left" (click)="clear()">
            <i class="eraser icon"></i> Clear
          </div>
          <div class="pull-left" (click)="like()">
            <i class="like icon"></i> {{comment.likes}} Likes
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
export class DoCheckItem implements DoCheck {
  @Input('comment') comment: any;
  onRemove: EventEmitter<any>;
  differ: any;

  constructor(differs: KeyValueDiffers) {
    this.differ = differs.find([]).create(null);
    this.onRemove = new EventEmitter();
  }

  //ngDoCheck is called every time the component is checked, which is quite a lot as it's checked on every event
  ngDoCheck(): void {
    var changes = this.differ.diff(this.comment);
    console.log(0, changes);
    if (changes) {
      changes.forEachAddedItem(r => this.logChange('added', r));
      changes.forEachRemovedItem(r => this.logChange('removed', r));
      changes.forEachChangedItem(r => this.logChange('changed', r));
    }
  }

  logChange(action, r) {
    if (action === 'changed') {
      console.log(1, r.key, action, 'from', r.previousValue, 'to', r.currentValue);
    }
    if (action === 'added') {
      console.log(2, action, r.key, 'with', r.currentValue);
    }
    if (action === 'removed') {
      console.log(3, action, r.key, '(was ' + r.previousValue + ')');
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
  <do-check-item [comment]="comment"
    *ngFor="let comment of comments" (onRemove)="removeComment($event)">
  </do-check-item>

  <button class="ui primary button" (click)="addComment()">
    Add
  </button>
  `
})
export class DoCheckCmp implements DoCheck {
  comments: any[];
  authors: string[];
  texts: string[];
  differ: any;

  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
    this.comments = [];

    this.authors = ['Elliot', 'Helen', 'Jenny', 'Joe', 'Justen', 'Matt'];
    this.texts = [
      "Ours is a life of constant reruns. We're always circling back to where we'd we starter day soon.",
      'Really cool!',
      'Thanks!'
    ];

    this.addComment();
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

  //ngDoCheck is called every time the component is checked, which is quite a lot as it's checked on every event
  ngDoCheck(): void {
    var changes = this.differ.diff(this.comments);

    if (changes) {
      changes.forEachAddedItem(r => console.log(5, 'Added', r.item));
      changes.forEachRemovedItem(r => console.log(6, 'Removed', r.item));
    }
  }
}


