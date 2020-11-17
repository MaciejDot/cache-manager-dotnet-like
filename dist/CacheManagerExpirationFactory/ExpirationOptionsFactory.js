import "./IExpirationOptionsFactory";
import "./IExpirationOptionsAddonsFactory";
import "../CacheItem/IBaseCacheItem";
import 'src/ExpirationOptions/IExpirationOptions';
export class ExpirationOptionsFactory {
    _expirationFunction;
    useCustomExpiration(isExpired) {
        this._expirationFunction = isExpired;
        return this;
    }
    useSlidingExpiration(miliseconds) {
        this._expirationFunction = (cacheItem) => {
            return cacheItem.entryDate < Date.now() + miliseconds;
        };
        return this;
    }
    build() {
        return {
            expirationFunction: this._expirationFunction
        };
    }
}
//# sourceMappingURL=ExpirationOptionsFactory.js.map