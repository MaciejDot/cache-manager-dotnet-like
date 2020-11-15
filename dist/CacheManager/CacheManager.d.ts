import { ICacheManager } from "./ICacheManager";
import { ICacheManagerOptions } from "../CacheManagerOptions/ICacheManagerOptions";
export declare class CacheManager implements ICacheManager {
    private _store;
    private _expirationFunction;
    constructor(options: ICacheManagerOptions);
    existAsync(key: string): Promise<boolean>;
    getAllKeysAsync(): Promise<string[]>;
    deleteItemAsync(key: string): Promise<void>;
    getItemAsync<T>(key: string): Promise<T>;
    setItemAsync<T>(key: string, item: T): Promise<void>;
}
