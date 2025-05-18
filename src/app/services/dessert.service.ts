import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Dessert, DessertFilter } from '../models/dessert.model';

@Injectable({ providedIn: 'root' })
export class DessertService {
  find(filter: DessertFilter): Observable<Dessert[]> {
    // Mocked data
    const allDesserts: Dessert[] = [
      { id: 1, originalName: 'Tiramisu', englishName: 'Tiramisu' },
      { id: 2, originalName: 'Větrník', englishName: 'Pinwheel cake' },
      { id: 3, originalName: 'Štrůdl', englishName: 'Apple strudel' },
    ];

    const filtered = allDesserts.filter((d) => {
      const originalMatch = !filter.originalName ||
        d.originalName.toLowerCase().includes(filter.originalName.toLowerCase());

      const englishMatch = !filter.englishName ||
        d.englishName.toLowerCase().includes(filter.englishName.toLowerCase());

      return originalMatch && englishMatch;
    });

    return of(filtered).pipe(delay(1000));
  }
}
