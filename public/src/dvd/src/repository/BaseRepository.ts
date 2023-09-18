import * as config from "@/config.json";
import type { Settings, QueryString } from "@/models";

export class BaseRepository<T>
{
    settings: Partial<Settings> = {};
    query_string: Partial<QueryString> = {};

    constructor()
    {
        this.settings.headers = {
            "X-DreamFactory-API-Key": config.credentials.api_key,
            "X-DreamFactory-Session-Token": config.credentials.session_token
        };
    }

    async GetAll<TEntity>(): Promise<Array<TEntity>> {
        return [] as Array<TEntity>;
    }

}