import { IExpirationOptionsFactory } from '../CacheManagerExpirationFactory/IExpirationOptionsFactory';
import { ICacheManager } from "../CacheManager/ICacheManager";
import { IExpirationOptions } from "../ExpirationOptions/IExpirationOptions";
import { IStore } from "../Store/IStore";
import { ICacheManagerFactory } from './ICacheManagerFactory';
import { ICacheManagerFactoryAddons } from './ICacheManagerFactoryAddons';
import { ICacheManagerFactoryExpiration } from './ICacheManagerFactoryExpiration';
import { ICacheManagerFactoryStore } from './ICacheManagerFactoryStore';
export declare class CacheManagerFactory implements ICacheManagerFactory, ICacheManagerFactoryStore, ICacheManagerFactoryExpiration, ICacheManagerFactoryAddons {
    private _namespace;
    private _store;
    private _expirationOptions;
    useNamespace(namespace: string): ICacheManagerFactoryStore;
    useLogging(): this;
    build(): ICacheManager;
    useExpiration(expirationOptionsFunction: (expirationOptions: IExpirationOptionsFactory) => IExpirationOptions): this;
    useCustomStore(store: IStore): this;
    useInMemoryStore(): this;
    useLocalStorage(): this;
    useSessionStorage(): this;
}
//# sourceMappingURL=CacheManagerFactory.d.ts.map