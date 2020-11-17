import { IBaseCacheItem } from "../CacheItem/IBaseCacheItem";
export interface IExpirationOptions {
    expirationFunction: (cacheItem: IBaseCacheItem) => boolean;
}
