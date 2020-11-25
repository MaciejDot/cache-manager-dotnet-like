import { ICacheItemEntry } from '../CacheItem/ICacheItemEntry';
import { ICacheManager } from '../CacheManager/ICacheManager';
export declare type SubscribtionFunction = (entriesChanged: ICacheItemEntry, cacheManager: ICacheManager) => void;
