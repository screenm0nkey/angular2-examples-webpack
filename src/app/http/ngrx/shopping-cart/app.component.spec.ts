import { TestBed, async } from '@angular/core/testing';
import { NgRxShoppingAppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgRxShoppingAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NgRxShoppingAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngrx-shopping-list'`, () => {
    const fixture = TestBed.createComponent(NgRxShoppingAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngrx-shopping-list');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(NgRxShoppingAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngrx-shopping-list!');
  });
});
