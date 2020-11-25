import { CacheManagerFactoryStore } from './CacheManagerFactoryStore';
export class CacheManagerFactory {
    useNamespace(namespace) {
        return new CacheManagerFactoryStore(namespace);
    }
}
