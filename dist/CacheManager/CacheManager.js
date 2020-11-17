import "../Store/IStore";
import "./ICacheManager";
import "../CacheManagerOptions/ICacheManagerOptions";
import "../CacheItem/IBaseCacheItem";
import 'src/CacheItem/ICacheItem';
import { KeyNotFoundException } from "../Exceptions/KeyNotFoundException";
export class CacheManager {
    _store;
    _expirationFunction;
    constructor(options) {
        const prefix = `__CacheManager__${options.namespace}__`;
        this._store = {
            deleteItem: (key) => options.store.deleteItem(`${prefix}${key}`),
            getItem: (key) => options.store.getItem(`${prefix}${key}`),
            getAllKeys: async () => (await options.store.getAllKeys()).filter(key => key.startsWith(prefix)).map(key => key.substr(prefix.length)),
            setItem: (key, item) => options.store.setItem(`${prefix}${key}`, item),
            exist: (key) => options.store.exist(`${prefix}${key}`)
        };
        this._expirationFunction = options.expirationOptions.expirationFunction;
    }
    async existAsync(key) {
        return await this._store.exist(key) &&
            !this._expirationFunction(await this._store.getItem(key));
    }
    getAllKeysAsync() {
        return this._store.getAllKeys();
    }
    async deleteItemAsync(key) {
        await this._store.exist(key) ? this._store.deleteItem(key) : Promise.resolve();
    }
    async getItemAsync(key) {
        if (!await this.existAsync(key)) {
            throw KeyNotFoundException(`key ${key} was not found`);
        }
        return (await this._store.getItem(key)).entry;
    }
    async setItemAsync(key, item) {
        this._store.setItem(key, { entry: item, entryDate: Date.now() });
    }
}
//# sourceMappingURL=CacheManager.js.map