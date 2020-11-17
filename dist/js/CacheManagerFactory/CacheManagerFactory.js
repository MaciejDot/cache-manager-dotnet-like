import { CacheManager } from "../CacheManager/CacheManager";
import { LocalStore } from "../Store/LocalStore";
import { SessionStore } from "../Store/SessionStore";
import { InMemoryStore } from "../Store/InMemoryStore";
import { ExpirationOptionsFactory } from "../CacheManagerExpirationFactory/ExpirationOptionsFactory";
export class CacheManagerFactory {
    useNamespace(namespace) {
        this._namespace = namespace;
        return this;
    }
    build() {
        return new CacheManager({
            store: this._store,
            namespace: this._namespace,
            expirationOptions: this._expirationOptions
        });
    }
    useExpiration(expirationOptionsFunction) {
        this._expirationOptions = expirationOptionsFunction(new ExpirationOptionsFactory());
        return this;
    }
    useCustomStore(store) {
        this._store = store;
        return this;
    }
    useInMemoryStore() {
        this._store = new InMemoryStore();
        return this;
    }
    useLocalStorage() {
        this._store = new LocalStore();
        return this;
    }
    useSessionStorage() {
        this._store = new SessionStore();
        return this;
    }
}
