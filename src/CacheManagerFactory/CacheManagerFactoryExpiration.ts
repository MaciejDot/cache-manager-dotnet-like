import { ICacheManagerFactoryExpiration } from './ICacheManagerFactoryExpiration';
import { IStore } from "../Store/IStore";
import { ExpirationOptionsFactory } from '../CacheManagerExpirationFactory/ExpirationOptionsFactory';
import { IExpirationOptionsFactory } from '../CacheManagerExpirationFactory/IExpirationOptionsFactory';
import { IExpirationOptions } from '../ExpirationOptions/IExpirationOptions';
import { CacheManagerFactoryCleaners } from './CacheManagerFactoryCleaners';
export class CacheManagerFactoryExpiration implements ICacheManagerFactoryExpiration {
    private _namespace: string
    private _store: IStore
    constructor(options : { namespace: string , store : IStore})
    {
        this._store = options.store
        this._namespace = options.namespace
    }

    useExpiration(expirationOptionsFunction: (expirationOptions: IExpirationOptionsFactory) => IExpirationOptions) {
        return new CacheManagerFactoryCleaners(
            {
                namespace : this._namespace,
                store: this._store,
                expirationOptions :expirationOptionsFunction(new ExpirationOptionsFactory())})
      }
}