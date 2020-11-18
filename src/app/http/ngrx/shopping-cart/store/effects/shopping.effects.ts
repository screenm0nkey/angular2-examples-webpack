import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ShoppingService } from '../../shopping.service';
import { addItemFailureAction, addItemSuccessAction, AddShoppingAction, deleteItemFailureAction, deleteItemSuccessAction, DeleteShoppingAction, LoadShoppingAction, loadShoppingFailureAction, loadShoppingSuccessAction, ShoppingActionTypes } from '../actions/shopping.actions';

@Injectable()
export class ShoppingEffects {

    @Effect() loadShopping$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
                concatMap(this.getShoppingItems.bind(this))
            )
    );

    @Effect() addShoppingItem$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType<AddShoppingAction>(ShoppingActionTypes.ADD_ITEM),
                concatMap(this.addShoppingItems.bind(this))
            )
    );

    @Effect() deleteShoppingItem$ = createEffect(() =>
        this.actions$
            .pipe(
                ofType<DeleteShoppingAction>(ShoppingActionTypes.DELETE_ITEM),
                concatMap(this.deleteShoppingItems.bind(this))
            )
    );

    constructor(
        private actions$: Actions,
        private shoppingService: ShoppingService
    ) { }

    getShoppingItems(): Observable<LoadShoppingAction> {
        return this.shoppingService.getShoppingItems()
            .pipe(
                map(data => (loadShoppingSuccessAction({ payload: data }))),
                catchError((error: Error) => of(loadShoppingFailureAction({ payload: error })))
            );
    }

    addShoppingItems({ payload }): Observable<AddShoppingAction> {
        return this.shoppingService.addShoppingItem(payload)
            .pipe(
                map(() => addItemSuccessAction({ payload })),
                catchError((error: Error) => of(addItemFailureAction({ payload: error })))
            );
    }

    deleteShoppingItems({ payload }): Observable<DeleteShoppingAction> {
        return this.shoppingService.deleteShoppingItem(payload)
            .pipe(
                map(() => (deleteItemSuccessAction({ payload }))),
                catchError((error: Error) => of(deleteItemFailureAction({ payload: error })))
            );
    }

}