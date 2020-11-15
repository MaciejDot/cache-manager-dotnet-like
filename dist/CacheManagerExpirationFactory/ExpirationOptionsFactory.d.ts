import { IExpirationOptionsFactory } from "./IExpirationOptionsFactory";
import { IExpirationOptionsAddonsFactory } from "./IExpirationOptionsAddonsFactory";
import { IBaseCacheItem } from "../CacheItem/IBaseCacheItem";
import { IExpirationOptions } from 'src/ExpirationOptions/IExpirationOptions';
export declare class ExpirationOptionsFactory implements IExpirationOptionsFactory, IExpirationOptionsAddonsFactory {
    private _expirationFunction?;
    useCustomExpiration(isExpired: (cacheItem: IBaseCacheItem) => boolean): IExpirationOptionsAddonsFactory;
    useSlidingExpiration(miliseconds: number): IExpirationOptionsAddonsFactory;
    build(): IExpirationOptions;
}
