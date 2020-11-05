import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink } from '../../models/drink.model';
import { FoodService } from '../../services/food.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'drink-viewer',
    templateUrl: './drink-viewer.component.html',
    styleUrls: ['./drink-viewer.component.scss'],
    // This is the same as last commit
    providers: [
        { provide: FoodService, useClass: FoodService }
    ]
})
export class DrinkViewerComponent implements OnInit {
    items$: Observable<Drink[]>;

    constructor(private foodService: FoodService) { }

    ngOnInit(): void {
        this.items$ = this.foodService.getFood().pipe(
            map((food) => food[0].drinks)
        );
    }
}
