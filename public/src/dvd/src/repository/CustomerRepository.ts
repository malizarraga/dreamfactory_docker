import axios, { type AxiosResponse } from "axios";
import { BaseRepository } from ".";
import type { CustomerModel } from "@/models";

export class CustomerRepository extends BaseRepository<CustomerModel>
{
    constructor()
    {
        super();
        this.query_string = {
            data: {
                "related": [
                    "address"   
                ].join(",")
            }
        };
    }

    async GetAll<CustomerFullModel>(): Promise<CustomerFullModel[]> {
        let result: Array<CustomerFullModel> = [];
        const response: AxiosResponse = await axios.get("http://localhost/api/v2/postgres_db/_table/customer", {
          headers: this.settings.headers,
          data: this.query_string.data
        });

        if (response.status == 200) {
            const resource = response.data.resource;
            result = resource;
        }

        return result;
    }

    async GetById<CustomerFullModel>(id: number): Promise<Partial<CustomerFullModel>> {
        let result: Partial<CustomerFullModel> = {};
        const response: AxiosResponse = await axios.get(`http://localhost/api/v2/postgres_db/_table/customer/${id}`, {
          headers: this.settings.headers,
          data: this.query_string.data
        });

        if (response.status == 200) {
            const resource = response.data.resource;
            result = resource;
        }

        return result;
    }
}