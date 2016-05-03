import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    selector:'search-box',
    template:`<div>
        <input #input type="text" (input)="update.emit(input.value)" placeholder="Search">
    </div>`
})
export class SearchBox{
    @Output() update = new EventEmitter();

    ngOnInit(){
        this.update.emit('');
    }
}