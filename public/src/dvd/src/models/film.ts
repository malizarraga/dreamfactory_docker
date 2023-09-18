export interface FilmModel {
    film_id: number;
    title: string;
    description: string;
    release_year: string;
    language_id: number;
    rental_duration: number;
    rental_rate: number;
    length: number;
    replacement_cost: number;
    last_update: Date;
}