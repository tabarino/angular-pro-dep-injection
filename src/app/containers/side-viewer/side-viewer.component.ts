import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Side } from 'src/app/models/side.model';
import { FoodService } from '../../services/food.service';

export abstract class SideService {
    getSides: () => Observable<Side[]>;
}

@Component({
    selector: 'side-viewer',
    templateUrl: './side-viewer.component.html',
    styleUrls: ['./side-viewer.component.scss'],
    providers: [
        FoodService,
        { provide: SideService, useExisting: FoodService }
    ]
})
export class SideViewerComponent implements OnInit {
    items$: Observable<Side[]>;

    constructor(private foodService: SideService) { }

    ngOnInit(): void {
        this.items$ = this.foodService.getSides();
    }
}
