import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Side } from 'src/app/models/side.model';
import { FoodService } from '../../services/food.service';
import { map, pluck } from 'rxjs/operators';

@Component({
    selector: 'side-viewer',
    templateUrl: './side-viewer.component.html',
    styleUrls: ['./side-viewer.component.scss'],
    providers: [
        FoodService
    ]
})
export class SideViewerComponent implements OnInit {
    items$: Observable<Side[]>;

    constructor(private foodService: FoodService) { }

    ngOnInit(): void {
        this.items$ = this.foodService.getFood().pipe(
            map((food) => food[0].sides)
        );
    }
}
