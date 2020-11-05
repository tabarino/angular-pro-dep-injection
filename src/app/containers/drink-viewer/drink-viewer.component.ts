import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drink } from '../../models/drink.model';
import { FoodService } from '../../services/food.service';

export function DrinkFactory(http) {
    return new FoodService(http, '/api/drinks');
}

@Component({
    selector: 'drink-viewer',
    templateUrl: './drink-viewer.component.html',
    styleUrls: ['./drink-viewer.component.scss'],
    providers: [
        {
            provide: FoodService,
            useFactory: DrinkFactory,
            deps: [
                HttpClient
            ]
        }
    ]
})
export class DrinkViewerComponent implements OnInit {
    items$: Observable<Drink[]>;

    constructor(private foodService: FoodService) { }

    ngOnInit(): void {
        this.items$ = this.foodService.getFood();
    }
}
