import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/models/pizza.model';
import { FoodService } from '../../services/food.service';

export function PizzaFactory(http) {
    return new FoodService(http, '/api/pizzas');
}

@Component({
    selector: 'pizza-viewer',
    templateUrl: './pizza-viewer.component.html',
    styleUrls: ['./pizza-viewer.component.scss'],
    providers: [
        {
            provide: FoodService,
            useFactory: PizzaFactory,
            deps: [
                HttpClient
            ]
        }
    ]
})
export class PizzaViewerComponent implements OnInit {
    items$: Observable<Pizza[]>;

    constructor(private foodService: FoodService) { }

    ngOnInit(): void {
        this.items$ = this.foodService.getFood();
    }
}
