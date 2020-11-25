import { ICacheManager } from "./ICacheManager";
import { ICacheManagerOptions } from "../CacheManagerOptions/ICacheManagerOptions";
import { IBaseCacheItem } from "../CacheItem/IBaseCacheItem";
import { IConfigurableBaseCacheItem } from '../CacheItem/IConfigurableBaseCacheItem';
export declare class CacheManager implements ICacheManager {
    private _store;
    private _expirationFunction;
    private _defaultExpiration;
    private _subscribtionFunctions;
    private chain;
    cleanAsync(): Promise<void>;
    constructor(options: ICacheManagerOptions);
    getCacheItemAsync<T>(key: string): Promise<IBaseCacheItem<T>>;
    setCacheItemAsync<T>(key: string, item: IConfigurableBaseCacheItem<T>): Promise<void>;
    existAsync(key: string): Promise<boolean>;
    getAllKeysAsync(): Promise<string[]>;
    deleteItemAsync(key: string): Promise<void>;
    getItemAsync<T>(key: string): Promise<T>;
    setItemAsync<T>(key: string, item: T): Promise<void>;
}
