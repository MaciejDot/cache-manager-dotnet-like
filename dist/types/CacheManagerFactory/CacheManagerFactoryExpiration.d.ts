import { ICacheManagerFactoryExpiration } from './ICacheManagerFactoryExpiration';
import { IStore } from "../Store/IStore";
import { IExpirationOptionsFactory } from '../CacheManagerExpirationFactory/IExpirationOptionsFactory';
import { IExpirationOptions } from '../ExpirationOptions/IExpirationOptions';
import { CacheManagerFactoryCleaners } from './CacheManagerFactoryCleaners';
export declare class CacheManagerFactoryExpiration implements ICacheManagerFactoryExpiration {
    private _namespace;
    private _store;
    constructor(options: {
        namespace: string;
        store: IStore;
    });
    useExpiration(expirationOptionsFunction: (expirationOptions: IExpirationOptionsFactory) => IExpirationOptions): CacheManagerFactoryCleaners;
}
