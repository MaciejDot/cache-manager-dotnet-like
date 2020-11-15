import { IExpirationOptionsFactory } from 'src/CacheManagerExpirationFactory/IExpirationOptionsFactory'
import { CacheManager } from "../CacheManager/CacheManager"
import { ICacheManager } from "../CacheManager/ICacheManager"
import { IExpirationOptions } from "../ExpirationOptions/IExpirationOptions"
import { IStore } from "../Store/IStore"
import { ICacheManagerFactory } from './ICacheManagerFactory'
import { ICacheManagerFactoryAddons } from './ICacheManagerFactoryAddons'
import { ICacheManagerFactoryExpiration } from './ICacheManagerFactoryExpiration'
import { ICacheManagerFactoryStore } from './ICacheManagerFactoryStore'
import { LocalStore } from "../Store/LocalStore"
import { SessionStore } from "../Store/SessionStore"
import { InMemoryStore } from "../Store/InMemoryStore"
import { ExpirationOptionsFactory } from "../CacheManagerExpirationFactory/ExpirationOptionsFactory"

export class CacheManagerFactory implements ICacheManagerFactory,
  ICacheManagerFactoryStore,
  ICacheManagerFactoryExpiration,
  ICacheManagerFactoryAddons {
  private _namespace: string = ""
  private _store: IStore | undefined
  private _expirationOptions: IExpirationOptions | undefined


  useNamespace(namespace: string) {
    this._namespace = namespace
    return this as any as ICacheManagerFactoryStore
  }
  useLogging() {
    return this
  }
  build() {
    return new CacheManager({
      store: this._store as any as IStore,
      namespace: this._namespace,
      expirationOptions: this._expirationOptions as IExpirationOptions
    }) as ICacheManager
  }
  useExpiration(expirationOptionsFunction: (expirationOptions: IExpirationOptionsFactory) => IExpirationOptions) {
    this._expirationOptions = expirationOptionsFunction(new ExpirationOptionsFactory())
    return this
  }
  useCustomStore(store: IStore) {
    return this
  }
  useInMemoryStore() {
    this._store = new InMemoryStore()
    return this
  }
  useLocalStorage() {
    this._store = new LocalStore()
    return this
  }
  useSessionStorage() {
    this._store = new SessionStore()
    return this
  }
}