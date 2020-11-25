import { IBaseCacheItem } from '../CacheItem/IBaseCacheItem';

export type ExpirationFunction = (cacheItem : IBaseCacheItem) => boolean;