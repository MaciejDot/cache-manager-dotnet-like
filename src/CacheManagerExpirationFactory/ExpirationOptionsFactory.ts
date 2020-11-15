import { IExpirationOptionsFactory } from "./IExpirationOptionsFactory";
import { IExpirationOptionsAddonsFactory } from "./IExpirationOptionsAddonsFactory";
import { IBaseCacheItem } from "../CacheItem/IBaseCacheItem"
import { IExpirationOptions } from 'src/ExpirationOptions/IExpirationOptions';

export class ExpirationOptionsFactory implements
    IExpirationOptionsFactory,
    IExpirationOptionsAddonsFactory
    {
        private _expirationFunction? : (cacheItem: IBaseCacheItem) => boolean
        
        useCustomExpiration( isExpired :(cacheItem: IBaseCacheItem) => boolean){
            this._expirationFunction = isExpired
            return this as any as IExpirationOptionsAddonsFactory
        }
        useSlidingExpiration(miliseconds: number) {
            this._expirationFunction = (cacheItem : IBaseCacheItem) => {
                return cacheItem.entryDate < Date.now() + miliseconds
            }
            return this as any as IExpirationOptionsAddonsFactory
        }
        build () {
            return {
                expirationFunction : this._expirationFunction 
            } as IExpirationOptions
        }
}
