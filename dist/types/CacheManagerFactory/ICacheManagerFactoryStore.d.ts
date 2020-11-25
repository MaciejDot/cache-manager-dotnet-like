import { IStore } from "../Store/IStore";
import { ICacheManagerFactoryExpiration } from "./ICacheManagerFactoryExpiration";
export interface ICacheManagerFactoryStore {
    /**
  * Use custom store implementation as state source for CacheManager
  *
  * @param store store implementation
  */
    useCustomStore: (store: IStore) => ICacheManagerFactoryExpiration;
    /**
   * Use in memory (const) as state source for CacheManager
  */
    useInMemoryStore: () => ICacheManagerFactoryExpiration;
    /**
    * Use localStorage as state source for CacheManager
  */
    useLocalStorage: () => ICacheManagerFactoryExpiration;
    /**
    * Use sessionStorage as state source for CacheManager
  */
    useSessionStorage: () => ICacheManagerFactoryExpiration;
}
