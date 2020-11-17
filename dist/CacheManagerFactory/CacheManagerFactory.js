import '../CacheManagerExpirationFactory/IExpirationOptionsFactory';
import { CacheManager } from "../CacheManager/CacheManager";
import "../CacheManager/ICacheManager";
import "../ExpirationOptions/IExpirationOptions";
import "../Store/IStore";
import './ICacheManagerFactory';
import './ICacheManagerFactoryAddons';
import './ICacheManagerFactoryExpiration';
import './ICacheManagerFactoryStore';
import { LocalStore } from "../Store/LocalStore";
import { SessionStore } from "../Store/SessionStore";
import { InMemoryStore } from "../Store/InMemoryStore";
import { ExpirationOptionsFactory } from "../CacheManagerExpirationFactory/ExpirationOptionsFactory";
export class CacheManagerFactory {
    _namespace = "";
    _store;
    _expirationOptions;
    useNamespace(namespace) {
        this._namespace = namespace;
        return this;
    }
    useLogging() {
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
//# sourceMappingURL=CacheManagerFactory.js.map