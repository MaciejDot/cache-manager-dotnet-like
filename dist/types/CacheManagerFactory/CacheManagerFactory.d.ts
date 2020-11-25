import { CacheManagerFactoryStore } from './CacheManagerFactoryStore';
import { ICacheManagerFactory } from './ICacheManagerFactory';
export declare class CacheManagerFactory implements ICacheManagerFactory {
    useNamespace(namespace: string): CacheManagerFactoryStore;
}
