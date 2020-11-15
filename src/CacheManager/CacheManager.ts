import { IStore } from "../Store/IStore"
import { ICacheManager } from "./ICacheManager"
import { ICacheManagerOptions } from "../CacheManagerOptions/ICacheManagerOptions"
import { IBaseCacheItem } from "../CacheItem/IBaseCacheItem"
import { ICacheItem } from 'src/CacheItem/ICacheItem'
import { KeyNotFoundException } from "../Exceptions/KeyNotFoundException"
export class CacheManager implements ICacheManager {
    private _store: IStore
    private _expirationFunction: (cacheItem: IBaseCacheItem) => boolean

    constructor(options: ICacheManagerOptions) {
        const prefix = `__CacheManager__${options.namespace}__`
        this._store = {
            deleteItem: (key: string) => options.store.deleteItem(`${prefix}${key}`),
            getItem: (key: string) => options.store.getItem(`${prefix}${key}`),
            getAllKeys: async () => (await options.store.getAllKeys()).filter(key => key.startsWith(prefix)).map(key => key.substr(prefix.length)),
            setItem: (key: string, item: any) => options.store.setItem(`${prefix}${key}`, item),
            exist: (key: string) => options.store.exist(`${prefix}${key}`)
        }
        this._expirationFunction = options.expirationOptions.expirationFunction
    }

    async existAsync(key: string) {
        return await this._store.exist(key) && 
            !this._expirationFunction(await this._store.getItem(key)) 
    }

    getAllKeysAsync() {
        return this._store.getAllKeys()
    }

    async deleteItemAsync(key: string) {
        await this._store.exist(key) ? this._store.deleteItem(key) : Promise.resolve()
    }

    async getItemAsync<T>(key: string) {
        if (!await this.existAsync(key)) {
            throw KeyNotFoundException(`key ${key} was not found`)
        }
        return ((await this._store.getItem(key)) as ICacheItem<T>).entry
    }

    async setItemAsync<T>(key: string, item: T) {
        this._store.setItem(key, item as any)
    }
}