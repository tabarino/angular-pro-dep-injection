import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/models/pizza.model';
import { FoodService } from '../../services/food.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'pizza-viewer',
    templateUrl: './pizza-viewer.component.html',
    styleUrls: ['./pizza-viewer.component.scss'],
    providers: [
        FoodService
    ]
})
export class PizzaViewerComponent implements OnInit {
    items$: Observable<Pizza[]>;

    constructor(private foodService: FoodService) { }

    ngOnInit(): void {
        this.items$ = this.foodService.getFood().pipe(
            map((food) => food[0].pizzas)
        );
    }
}
