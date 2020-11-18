import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { addItemAction, deleteItemAction, loadShoppingAction } from './store/actions/shopping.actions';
import { AppState, ShoppingItem } from './store/models/shopping.model';


@Component({
  selector: 'ngrx-shopping-cart',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class NgRxShoppingAppComponent implements OnInit {
  shoppingItems: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newShoppingItem: ShoppingItem = { id: '', name: '' }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);
    this.store.dispatch(loadShoppingAction({ payload: [] }));
  }

  addItem() {
    this.newShoppingItem.id = uuid();
    this.store.dispatch(addItemAction({ payload: this.newShoppingItem }));
    this.newShoppingItem = { id: '', name: '' };
  }

  deleteItem(id: string) {
    this.store.dispatch(deleteItemAction({ payload: id }));
  }
}