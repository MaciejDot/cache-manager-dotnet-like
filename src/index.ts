import { CacheManagerFactory } from "./CacheManagerFactory/CacheManagerFactory"
import { ICacheManagerFactory } from "./CacheManagerFactory/ICacheManagerFactory"
export const builder = (): ICacheManagerFactory => new CacheManagerFactory();