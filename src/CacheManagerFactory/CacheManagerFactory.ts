import { CacheManagerFactoryStore } from './CacheManagerFactoryStore'
import { ICacheManagerFactory } from './ICacheManagerFactory';

export class CacheManagerFactory implements ICacheManagerFactory{
  useNamespace(namespace: string) {
    return new CacheManagerFactoryStore(namespace);
  }
}