import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { DessertIdToRatingMap } from '../models/dessert.model';

@Injectable({ providedIn: 'root' })
export class RatingService {
    loadExpertRatings(): Observable<DessertIdToRatingMap> {
        const ratings: DessertIdToRatingMap = {
            1: 4.5,
            2: 3.8,
        };
        return of(ratings).pipe(delay(1000));
    }
}
