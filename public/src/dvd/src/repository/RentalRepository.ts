import axios, { type AxiosResponse } from "axios";
import { BaseRepository } from ".";
import type { RentalFullModel, RentalModel } from "@/models";

export class RentalRepository extends BaseRepository<RentalModel>
{
    constructor()
    {
        super();
        this.query_string = {
            data: {
                "related": [
                    "customer",
                    "inventory",
                    "films",
                    "store"   
                ].join(",")
            }
        };
    }

    async GetAll<RentalFullModel>(): Promise<RentalFullModel[]> {
        let result: Array<RentalFullModel> = [];
        const response: AxiosResponse = await axios.get("http://localhost/api/v2/postgres_db/_table/rental", {
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