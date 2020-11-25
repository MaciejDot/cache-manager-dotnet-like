import { KeyNotFoundException } from "../Exceptions/KeyNotFoundException";
import { isExpiredAbsolute, isExpiredSliding, neverExpires } from '../ExpirationFunctions/ExpirationFunctions';
import { ExpirationMustBeSetException } from '../Exceptions/ExpirationMustBeSetException';
export class CacheManager {
    constructor(options) {
        const prefix = `__CacheManager__${options.namespace}__`;
        this._store = {
            deleteItem: async (key) => {
                const entry = await options.store.getItem(`${prefix}${key}`);
                this._subscribtionFunctions.forEach(subscribtion => subscribtion({
                    entry: entry,
                    entryState: "deleted"
                }, this));
                return options.store.deleteItem(`${prefix}${key}`);
            },
            getItem: (key) => options.store.getItem(`${prefix}${key}`),
            getAllKeys: async () => (await options.store.getAllKeys()).filter(key => key.startsWith(prefix)).map(key => key.substr(prefix.length)),
            setItem: (key, item) => {
                this._subscribtionFunctions.forEach(subscribtion => subscribtion({
                    entry: item,
                    entryState: "set"
                }, this));
                return options.store.setItem(`${prefix}${key}`, item);
            },
            exist: (key) => options.store.exist(`${prefix}${key}`)
        };
        this._expirationFunction = this.chain([neverExpires,
            isExpiredAbsolute,
            isExpiredSliding,
            ...options.expirationOptions.expirationFillters]);
        this._defaultExpiration = options.expirationOptions.defaultExpirtaionOption;
        this._subscribtionFunctions = options.subscribeToChange;
        if (options.cleanOptions.type === "periodically") {
            setInterval(this.clean, options.cleanOptions.options.miliseconds);
        }
    }
    chain(expirationFillters) {
        let joined = () => false;
        for (let index = expirationFillters.length - 1; index >= 0; index -= 1) {
            joined = (item) => expirationFillters[index](item, () => joined(item));
        }
        return joined;
    }
    async clean() {
        const keys = await this._store.getAllKeys();
        keys.forEach(async (key) => {
            if (this._expirationFunction(await this._store.getItem(key))) {
                await this.deleteItemAsync(key);
            }
        });
    }
    async getCacheItemAsync(key) {
        if (!await this.existAsync(key)) {
            throw KeyNotFoundException(`key ${key} was not found`);
        }
        return (await this._store.getItem(key));
    }
    setCacheItemAsync(key, item) {
        return this._store.setItem(key, { ...item, entryDate: Date.now() });
    }
    async existAsync(key) {
        if (await this._store.exist(key)) {
            if (!this._expirationFunction(await this._store.getItem(key))) {
                return true;
            }
            await this.deleteItemAsync(key);
        }
        return false;
    }
    getAllKeysAsync() {
        return this._store.getAllKeys();
    }
    async deleteItemAsync(key) {
        await this._store.exist(key) ? this._store.deleteItem(key) : Promise.resolve();
    }
    async getItemAsync(key) {
        return (await this.getCacheItemAsync(key)).entry;
    }
    async setItemAsync(key, item) {
        switch (this._defaultExpiration.type) {
            case "notSet":
                throw ExpirationMustBeSetException(`expiration of item with key ${key} must be set manually by setCacheItemAsync`);
            case "never":
                return this._store.setItem(key, { entry: item, entryDate: Date.now(), neverExpires: true });
            case "sliding":
                return this._store.setItem(key, { entry: item, entryDate: Date.now(), slidingExpirationTime: this._defaultExpiration.options.millisecondsSlide });
        }
    }
}
