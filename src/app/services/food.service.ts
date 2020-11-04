import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { convertSnaps } from './db-utils';

@Injectable()
export class FoodService {
    constructor(
        private http: HttpClient,
        @Inject('api') private api: string
    ) { }

    getFood(): Observable<any[]> {
        return this.http.get<any[]>(this.api).pipe(
            map(snaps => convertSnaps<any>(snaps)),
            catchError(error => throwError(error))
        );
    }
}
