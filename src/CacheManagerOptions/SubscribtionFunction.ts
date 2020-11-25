import { ICacheItemEntry } from '../CacheItem/ICacheItemEntry';
import { ICacheManager } from '../CacheManager/ICacheManager';

export type SubscribtionFunction = (entriesChanged : ICacheItemEntry, cacheManager : ICacheManager) => void