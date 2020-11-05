import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from 'src/app/models/pizza.model';
import { FoodService } from '../../services/food.service';

export abstract class PizzaService {
    getPizzas: () => Observable<Pizza[]>;
}

@Component({
    selector: 'pizza-viewer',
    templateUrl: './pizza-viewer.component.html',
    styleUrls: ['./pizza-viewer.component.scss'],
    providers: [
        FoodService,
        { provide: PizzaService, useExisting: FoodService }
    ]
})
export class PizzaViewerComponent implements OnInit {
    items$: Observable<Pizza[]>;

    constructor(private foodService: PizzaService) { }

    ngOnInit(): void {
        this.items$ = this.foodService.getPizzas();
    }
}
