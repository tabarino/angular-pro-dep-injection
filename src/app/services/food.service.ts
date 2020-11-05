import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { convertSnaps } from './db-utils';

@Injectable()
export class FoodService {
    constructor(
        private http: HttpClient
    ) { }

    getDrinks(): Observable<any[]> {
        return this.http.get<any[]>('/api/drinks').pipe(
            map(snaps => convertSnaps<any>(snaps)),
            catchError(error => throwError(error))
        );
    }

    getPizzas(): Observable<any[]> {
        return this.http.get<any[]>('/api/pizzas').pipe(
            map(snaps => convertSnaps<any>(snaps)),
            catchError(error => throwError(error))
        );
    }

    getSides(): Observable<any[]> {
        return this.http.get<any[]>('/api/sides').pipe(
            map(snaps => convertSnaps<any>(snaps)),
            catchError(error => throwError(error))
        );
    }
}
