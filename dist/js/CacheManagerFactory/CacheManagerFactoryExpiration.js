import { ExpirationOptionsFactory } from '../CacheManagerExpirationFactory/ExpirationOptionsFactory';
import { CacheManagerFactoryCleaners } from './CacheManagerFactoryCleaners';
export class CacheManagerFactoryExpiration {
    constructor(options) {
        this._store = options.store;
        this._namespace = options.namespace;
    }
    useExpiration(expirationOptionsFunction) {
        return new CacheManagerFactoryCleaners({
            namespace: this._namespace,
            store: this._store,
            expirationOptions: expirationOptionsFunction(new ExpirationOptionsFactory())
        });
    }
}
