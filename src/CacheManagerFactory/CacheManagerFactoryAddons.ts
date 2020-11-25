import { ICleanOptions } from 'src/CacheManagerOptions/ICleanOptions';
import { SubscribtionFunction } from 'src/CacheManagerOptions/SubscribtionFunction';
import { CacheManager } from '../CacheManager/CacheManager';
import { IExpirationOptions } from '../ExpirationOptions/IExpirationOptions';
import { IStore } from '../Store/IStore';
import { ICacheManagerFactoryAddons } from './ICacheManagerFactoryAddons';

export class CacheManagerFactoryAddons implements ICacheManagerFactoryAddons {
    private _namespace: string
    private _store: IStore
    private _expirationOptions: IExpirationOptions
    private _cleanOptions : ICleanOptions
    private _subscribeFunctions : SubscribtionFunction[] = []
    constructor(options : {
        namespace : string,
        store : IStore,
        expirationOptions: IExpirationOptions,
        cleanOptions : ICleanOptions
    }){
        this._expirationOptions = options.expirationOptions
        this._namespace = options.namespace
        this._store = options.store
        this._cleanOptions = options.cleanOptions
    }

    useSubscribeToChange(subscribtion: SubscribtionFunction)
    {
        this._subscribeFunctions.push(subscribtion)
        return this
    }

    build() {
        return new CacheManager({
          store: this._store,
          cleanOptions : this._cleanOptions,
          namespace: this._namespace,
          subscribeToChange: this._subscribeFunctions,
          expirationOptions: this._expirationOptions
        })
      }

}