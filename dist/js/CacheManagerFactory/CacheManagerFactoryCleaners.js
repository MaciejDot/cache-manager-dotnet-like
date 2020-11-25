import { CacheManagerFactoryAddons } from './CacheManagerFactoryAddons';
export class CacheManagerFactoryCleaners {
    constructor(options) {
        this._expirationOptions = options.expirationOptions;
        this._namespace = options.namespace;
        this._store = options.store;
    }
    useNoClean() {
        return new CacheManagerFactoryAddons({
            store: this._store,
            namespace: this._namespace,
            expirationOptions: this._expirationOptions,
            cleanOptions: {
                type: "noClean"
            }
        });
    }
    usePeriodicalClean(miliseconds) {
        return new CacheManagerFactoryAddons({
            store: this._store,
            namespace: this._namespace,
            expirationOptions: this._expirationOptions,
            cleanOptions: {
                type: "periodically",
                options: {
                    miliseconds: miliseconds
                }
            }
        });
    }
}
