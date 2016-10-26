import { Component, OnInit } from '@angular/core';
import { ChickensService} from './chicken.service';


@Component({
    selector: 'chickens-component',
    template: require('./main.tmpl.html'),
    providers: [ChickensService]
})
export class ChickensComponent implements OnInit {
    chickens:any = [];
    customers:any = [];
    name:string = '';

    constructor(private chickensService:ChickensService) {
        //chickensService.chickens.subscribe(res => this.chickens = res.json())
    }

    ngOnInit(){
        this.getBooksAndMovies();
    }

    saidHello(name) {
        this.name = name;
        console.log(name);
    }

    getBooksAndMovies() {
        this.chickensService.getBooksAndMovies().subscribe(
            data => {
                this.chickens = data[0];
                this.customers = data[1];
            }
        );
    }
}
