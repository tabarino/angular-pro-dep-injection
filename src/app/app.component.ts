import { Component, DoCheck, NgZone, OnInit } from '@angular/core';
import { FoodStoreService } from './food-store/food-store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
    title = 'angular-pro-dep-injection';
    store$ = this.foodService.getStore();
    counter = 0;

    constructor(
        private foodService: FoodStoreService,
        private zone: NgZone
    ) {}

    ngOnInit(): void {
        this.zone.runOutsideAngular(() => {
            for (let i = 0; i < 100; i++) {
                setTimeout(() => this.counter++);
            }
            this.zone.run(() => {
                setTimeout(() => this.counter = this.counter, 1000);
            });
        });
    }

    ngDoCheck(): void {
        console.log('Change Detection has been run');
    }
}
