import { IStore } from '../Store/IStore';
import { CacheManagerFactoryExpiration } from './CacheManagerFactoryExpiration';
import { ICacheManagerFactoryStore } from './ICacheManagerFactoryStore';
export declare class CacheManagerFactoryStore implements ICacheManagerFactoryStore {
    private _namespace;
    constructor(namespace: string);
    useCustomStore(store: IStore): CacheManagerFactoryExpiration;
    useInMemoryStore(): CacheManagerFactoryExpiration;
    useLocalStorage(): CacheManagerFactoryExpiration;
    useSessionStorage(): CacheManagerFactoryExpiration;
}
