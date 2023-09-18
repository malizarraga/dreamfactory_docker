import type { CustomerModel, FilmModel, InventoryModel } from ".";

export interface RentalModel {
    rental_id: number;
    rental_date: Date;
    inventory_id: number;
    customer_id: number;
    return_date: Date;
    staff_id: number;
    last_update: Date;
}

export interface RentalFullModel extends RentalModel {
    customer: CustomerModel;
    inventory: InventoryModel;
    films: Array<FilmModel>;
}