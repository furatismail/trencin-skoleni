import { Component, inject, OnInit } from '@angular/core';
import { DessertService } from '../../services/dessert.service';
import { RatingService } from '../../services/rating.service';
import { Dessert, DessertFilter, DessertIdToRatingMap } from '../../models/dessert.model';
import { FormsModule } from '@angular/forms'
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-desserts',
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.css'
})
export class DessertsComponent implements OnInit {
  #dessertService = inject(DessertService);
  #ratingService = inject(RatingService);

  originalName = '';
  englishName = '';
  loading = false;

  desserts: Dessert[] = [];

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    const filter: DessertFilter = {
      originalName: this.originalName,
      englishName: this.englishName,
    };

    this.loading = true;

    this.#dessertService.find(filter).subscribe({
      next: (desserts) => {
        this.desserts = desserts;
        this.loading = false;
      },
      error: (error) => {
        console.error('Search error', error);
        this.loading = false;
      },
    });
  }

  toRated(desserts: Dessert[], ratings: DessertIdToRatingMap): Dessert[] {
    return desserts.map((d) =>
      ratings[d.id] ? { ...d, rating: ratings[d.id] } : d
    );
  }

  loadRatings(): void {
    this.loading = true;

    this.#ratingService.loadExpertRatings().subscribe({
      next: (ratings) => {
        const rated = this.toRated(this.desserts, ratings);
        this.desserts = rated;
        this.loading = false;
      },
      error: (error) => {
        console.error('Rating load error', error);
        this.loading = false;
      },
    });
  }
}
