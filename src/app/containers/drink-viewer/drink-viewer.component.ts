import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../../models/drink.model';
import { FoodService } from '../../services/food.service';

export abstract class DrinkService {
    getDrinks: () => Observable<Drink[]>;
}

@Component({
    selector: 'drink-viewer',
    templateUrl: './drink-viewer.component.html',
    styleUrls: ['./drink-viewer.component.scss'],
    providers: [
        FoodService,
        { provide: DrinkService, useExisting: FoodService }
    ]
})
export class DrinkViewerComponent implements OnInit {
    items$: Observable<Drink[]>;

    constructor(private foodService: DrinkService) { }

    ngOnInit(): void {
        this.items$ = this.foodService.getDrinks();
    }
}
