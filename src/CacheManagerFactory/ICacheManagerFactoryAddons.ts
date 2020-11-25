import { SubscribtionFunction } from '../CacheManagerOptions/SubscribtionFunction';
import { ICacheManager } from "../CacheManager/ICacheManager";

export interface ICacheManagerFactoryAddons {

  /**
* Use subscribtion to cache change
*
* @param subscribtion store implementation
*/
  useSubscribeToChange: (subscribtion: SubscribtionFunction) => ICacheManagerFactoryAddons

  /**
   * build cacheManager
*/
  build: () => ICacheManager
}