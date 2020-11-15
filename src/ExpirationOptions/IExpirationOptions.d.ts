import { IBaseCacheItem } from "src/CacheItem/IBaseCacheItem";

export interface IExpirationOptions {
    expirationFunction : (cacheItem: IBaseCacheItem) => boolean 
}