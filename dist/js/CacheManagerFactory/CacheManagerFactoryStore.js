import { InMemoryStore } from '../Store/InMemoryStore';
import { LocalStore } from '../Store/LocalStore';
import { SessionStore } from '../Store/SessionStore';
import { CacheManagerFactoryExpiration } from './CacheManagerFactoryExpiration';
export class CacheManagerFactoryStore {
    constructor(namespace) {
        this._namespace = namespace;
    }
    useCustomStore(store) {
        return new CacheManagerFactoryExpiration({
            namespace: this._namespace,
            store: store
        });
    }
    useInMemoryStore() {
        return new CacheManagerFactoryExpiration({
            namespace: this._namespace,
            store: new InMemoryStore()
        });
    }
    useLocalStorage() {
        return new CacheManagerFactoryExpiration({
            namespace: this._namespace,
            store: new LocalStore()
        });
    }
    useSessionStorage() {
        return new CacheManagerFactoryExpiration({
            namespace: this._namespace,
            store: new SessionStore()
        });
    }
}
