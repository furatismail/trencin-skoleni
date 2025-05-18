export interface Dessert {
  id: number;
  originalName: string;
  englishName: string;
  rating?: number;
}

export interface DessertFilter {
  originalName: string;
  englishName: string;
}

export type DessertIdToRatingMap = { [id: number]: number };
