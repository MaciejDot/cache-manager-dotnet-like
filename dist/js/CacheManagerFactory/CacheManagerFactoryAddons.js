import { CacheManager } from '../CacheManager/CacheManager';
export class CacheManagerFactoryAddons {
    constructor(options) {
        this._subscribeFunctions = [];
        this._expirationOptions = options.expirationOptions;
        this._namespace = options.namespace;
        this._store = options.store;
        this._cleanOptions = options.cleanOptions;
    }
    useSubscribeToChange(subscribtion) {
        this._subscribeFunctions.push(subscribtion);
        return this;
    }
    build() {
        return new CacheManager({
            store: this._store,
            cleanOptions: this._cleanOptions,
            namespace: this._namespace,
            subscribeToChange: this._subscribeFunctions,
            expirationOptions: this._expirationOptions
        });
    }
}
