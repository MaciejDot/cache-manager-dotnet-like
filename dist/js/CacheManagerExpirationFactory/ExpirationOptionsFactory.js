export class ExpirationOptionsFactory {
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
