import { ICacheManager } from "../CacheManager/ICacheManager";
export interface ICacheManagerFactoryAddons {
    /**
     * build cacheManager
  */
    build: () => ICacheManager;
}
