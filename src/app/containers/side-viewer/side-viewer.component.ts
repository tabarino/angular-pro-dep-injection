import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Side } from 'src/app/models/side.model';
import { FoodService } from '../../services/food.service';

export function SideFactory(http) {
    return new FoodService(http, '/api/sides');
}

@Component({
    selector: 'side-viewer',
    templateUrl: './side-viewer.component.html',
    styleUrls: ['./side-viewer.component.scss'],
    providers: [
        {
            provide: FoodService,
            useFactory: SideFactory,
            deps: [
                HttpClient
            ]
        }
    ]
})
export class SideViewerComponent implements OnInit {
    items$: Observable<Side[]>;

    constructor(private foodService: FoodService) { }

    ngOnInit(): void {
        this.items$ = this.foodService.getFood();
    }
}
