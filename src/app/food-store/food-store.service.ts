import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FOOD_STORE_CONFIG, FoodStoreConfig } from './config';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class FoodStoreService {
    constructor(
        private http: HttpClient,
        @Inject(FOOD_STORE_CONFIG) private config: FoodStoreConfig
    ) { }

    convertSnaps<T>(snaps): T[] {
        return snaps.payload.map(snap => snap);
    }

    getStore() {
        return this.http.get<any[]>('/api/stores', {
            params: new HttpParams()
                .set('id', this.config.storeId.toString())
                .set('token', this.config.storeToken)
        }).pipe(
            map(snaps => this.convertSnaps<any>(snaps)[0]),
            catchError(error => throwError(error))
        );
    }
}
