import { type AddressModel } from ".";

export interface CustomerModel {
    customer_id: number;
    store_id: number;
    first_name: string;
    last_name: string;
    email: string;
    address_id: string;
    activebool: boolean;
    create_date: Date;
    last_date: Date;
    active: number;
}

export interface CustomerFullModel extends CustomerModel {
    address: AddressModel;
}