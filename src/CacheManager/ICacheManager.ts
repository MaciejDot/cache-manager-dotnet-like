import { IBaseCacheItem } from '../CacheItem/IBaseCacheItem';
import { IConfigurableBaseCacheItem } from '../CacheItem/IConfigurableBaseCacheItem';

export interface ICacheManager {
  /**
* get item
*
* @param key item key
* 
* @returns cached item
* 
* @throws KeyNotFoundException if key was not found
*/
  getItemAsync: <T>(key: string) => Promise<T>
   /**
* get cache item
*
* @param key item key
* 
* @param item item value
*/
getCacheItemAsync: <T>(key: string) => Promise<IBaseCacheItem<T>>
  /**
* set cache item
*
* @param key item key
* 
* @param item item value
*/
  setItemAsync: <T>(key: string, item: T) => Promise<void>
  /**
* set cache item
*
* @param key item key
* 
* @param item item value
*/
setCacheItemAsync: <T>(key: string, item: IConfigurableBaseCacheItem<T>) => Promise<void>
  /**
* check if item exist in cache
*
* @param key item key
*/
  existAsync: (key: string) => Promise<boolean>
  /**
* get all unexpired keys of Cache
*
* @returns array of keys
*/
  getAllKeysAsync: () => Promise<string[]>
  /**
* delete cache item
*
* @param key item key
*/
  deleteItemAsync: (key: string) => Promise<void>
}