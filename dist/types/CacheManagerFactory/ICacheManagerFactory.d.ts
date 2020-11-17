import { ICacheManagerFactoryStore } from "./ICacheManagerFactoryStore";
export interface ICacheManagerFactory {
    /**
   * Set Namespace for CacheManager
   *
   * @param namespace  name for the namespace used in CacheManager
   */
    useNamespace: (namespace: string) => ICacheManagerFactoryStore;
}
//# sourceMappingURL=ICacheManagerFactory.d.ts.map