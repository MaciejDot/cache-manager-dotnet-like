import { IExpirationOptions } from '../ExpirationOptions/IExpirationOptions'
import { IStore } from '../Store/IStore'
import { CacheManagerFactoryAddons } from './CacheManagerFactoryAddons'
import { ICacheManagerFactoryCleaners } from './ICacheManagerFactoryCleaners'

export class CacheManagerFactoryCleaners implements ICacheManagerFactoryCleaners {
    private _namespace: string
    private _store: IStore
    private _expirationOptions: IExpirationOptions

    constructor(options : {
        namespace : string,
        store : IStore,
        expirationOptions: IExpirationOptions
    }){
        this._expirationOptions = options.expirationOptions
        this._namespace = options.namespace
        this._store = options.store
    }
    useNoClean () {
        return new CacheManagerFactoryAddons({
            store : this._store,
            namespace : this._namespace,
            expirationOptions:  this._expirationOptions,
            cleanOptions: {
                type: "noClean"
            }
        })
    }

    usePeriodicalClean(miliseconds: number){
        return new CacheManagerFactoryAddons({
            store : this._store,
            namespace : this._namespace,
            expirationOptions:  this._expirationOptions,
            cleanOptions: {
                type: "periodically",
                options : {
                    miliseconds : miliseconds
                }
            }
        })
    }

}