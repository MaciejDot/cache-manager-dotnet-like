import { IStore } from "../Store/IStore"
import { ICacheManager } from "./ICacheManager"
import { ICacheManagerOptions } from "../CacheManagerOptions/ICacheManagerOptions"
import { IBaseCacheItem } from "../CacheItem/IBaseCacheItem"
import { KeyNotFoundException } from "../Exceptions/KeyNotFoundException"
import { ExpirationFillter } from '../ExpirationFunctions/ExpirationFillter'
import { isExpiredAbsolute, isExpiredSliding, neverExpires } from '../ExpirationFunctions/ExpirationFunctions'
import { ExpirationFunction } from '../ExpirationFunctions/ExpirationFunction'
import { IConfigurableBaseCacheItem } from '../CacheItem/IConfigurableBaseCacheItem'
import { DefaultExpirationOption } from '../ExpirationOptions/IExpirationOptions'
import { ExpirationMustBeSetException } from '../Exceptions/ExpirationMustBeSetException'
import { SubscribtionFunction } from '../CacheManagerOptions/SubscribtionFunction'

export class CacheManager implements ICacheManager {
    private _store: IStore
    private _expirationFunction: ExpirationFunction;
    private _defaultExpiration: DefaultExpirationOption;
    private _subscribtionFunctions: SubscribtionFunction[];

    private chain(expirationFillters: ExpirationFillter[]): ExpirationFunction {
        let joined: ExpirationFunction = () => false;
        for (let index = expirationFillters.length - 1; index >= 0; index -= 1) {
            let help = joined;
            joined = (item) => expirationFillters[index](item, () => help(item))
        }
        return joined;
    }

    async cleanAsync() {
        const keys = await this._store.getAllKeys()
        keys.forEach(async key => {
            if (this._expirationFunction(await this._store.getItem(key) as IBaseCacheItem)) {
                await this.deleteItemAsync(key)
            }
        })
    }

    constructor(options: ICacheManagerOptions) {
        const prefix = `__CacheManager__${options.namespace}__`
        this.cleanAsync = this.cleanAsync.bind(this)
        this._store = {
            deleteItem: async (key: string) => {
                const entry = await options.store.getItem(`${prefix}${key}`) as IBaseCacheItem;
                this._subscribtionFunctions.forEach(subscribtion => subscribtion({
                    entry: entry,
                    entryState: "deleted",
                    entryKey: key
                }, this));
                return options.store.deleteItem(`${prefix}${key}`);
            },
            getItem: (key: string) => options.store.getItem(`${prefix}${key}`),
            getAllKeys: async () => (await options.store.getAllKeys()).filter(key => key.startsWith(prefix)).map(key => key.substr(prefix.length)),
            setItem: (key: string, item: unknown) => {
                this._subscribtionFunctions.forEach(subscribtion => subscribtion({
                    entry: item as IBaseCacheItem,
                    entryKey: key,
                    entryState: "set"
                }, this));
                return options.store.setItem(`${prefix}${key}`, item)
            },
            exist: (key: string) => options.store.exist(`${prefix}${key}`)
        }
        this._expirationFunction = this.chain([neverExpires,
            isExpiredAbsolute,
            isExpiredSliding,
            ...options.expirationOptions.expirationFillters]);
        this._defaultExpiration = options.expirationOptions.defaultExpirtaionOption;
        this._subscribtionFunctions = options.subscribeToChange
        if(options.cleanOptions.type === "periodically"){
            setInterval(this.cleanAsync, options.cleanOptions.options.miliseconds)
        }
        this.emitInitialValues.bind(this)()
    }

    private async emitInitialValues(){
        const keys = await this.getAllKeysAsync();
        for(let key in keys){
            const item = (await this._store.getItem(key)) as IBaseCacheItem;
            this._subscribtionFunctions.forEach(subscribtion => subscribtion({
                entry: item,
                entryKey: key,
                entryState: "init"
            },this))
        }
        await this.cleanAsync();
    }

    async getCacheItemAsync<T>(key: string) {
        if (!await this.existAsync(key)) {
            throw KeyNotFoundException(`key ${key} was not found`)
        }
        return ((await this._store.getItem(key)) as IBaseCacheItem<T>);
    }

    setCacheItemAsync<T>(key: string, item: IConfigurableBaseCacheItem<T>) {
        return this._store.setItem(key, { ...item, entryDate: Date.now() } as IBaseCacheItem<T> as any)
    }

    async existAsync(key: string) {

        if (await this._store.exist(key)) {
            if (!this._expirationFunction(await this._store.getItem(key) as IBaseCacheItem)) {
                return true
            }
            await this.deleteItemAsync(key);
        }
        return false;
    }

    getAllKeysAsync() {
        return this._store.getAllKeys()
    }

    async deleteItemAsync(key: string) {
        await this._store.exist(key) ? this._store.deleteItem(key) : Promise.resolve()
    }

    async getItemAsync<T>(key: string) {
        return (await this.getCacheItemAsync<T>(key)).entry
    }

    async setItemAsync<T>(key: string, item: T) {
        switch (this._defaultExpiration.type) {
            case "notSet":
                throw ExpirationMustBeSetException(`expiration of item with key ${key} must be set manually by setCacheItemAsync`)
            case "never":
                return this._store.setItem(key, { entry: item, entryDate: Date.now(), neverExpires: true } as IBaseCacheItem<T>)
            case "sliding":
                return this._store.setItem(key, { entry: item, entryDate: Date.now(), slidingExpirationTime: this._defaultExpiration.options.millisecondsSlide } as IBaseCacheItem<T>)
        }
    }
}