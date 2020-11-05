import { Component } from '@angular/core';
import { FoodStoreService } from './food-store/food-store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-pro-dep-injection';
    store$ = this.foodService.getStore();

    constructor(private foodService: FoodStoreService) {}
}
