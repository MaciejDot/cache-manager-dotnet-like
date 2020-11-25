import { IStore } from '../Store/IStore'
import { InMemoryStore } from '../Store/InMemoryStore'
import { LocalStore } from '../Store/LocalStore'
import { SessionStore } from '../Store/SessionStore'
import { CacheManagerFactoryExpiration } from './CacheManagerFactoryExpiration'
import { ICacheManagerFactoryStore } from './ICacheManagerFactoryStore'

export class CacheManagerFactoryStore implements ICacheManagerFactoryStore {
    private _namespace : string

    constructor(namespace : string){
        this._namespace = namespace
    }

    useCustomStore(store: IStore) {
        return new CacheManagerFactoryExpiration({
            namespace : this._namespace,
            store: store
        })
      }

      useInMemoryStore() {
        return new CacheManagerFactoryExpiration({
            namespace : this._namespace,
            store: new InMemoryStore()
        })
      }

      useLocalStorage() {
        return new CacheManagerFactoryExpiration({
            namespace : this._namespace,
            store: new LocalStore()
        })
      }
      
      useSessionStorage() {
        return new CacheManagerFactoryExpiration({
            namespace : this._namespace,
            store: new SessionStore()
        })
      }
}