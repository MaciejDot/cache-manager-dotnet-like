import { IExpirationOptionsFactory } from "../CacheManagerExpirationFactory/IExpirationOptionsFactory";
import { IExpirationOptions } from "../ExpirationOptions/IExpirationOptions";
import { ICacheManagerFactoryCleaners } from './ICacheManagerFactoryCleaners';
export interface ICacheManagerFactoryExpiration {
    /**
       * Configure expiration for cache data
    */
    useExpiration: (expirationOptionsFunction: (expirationOptions: IExpirationOptionsFactory) => IExpirationOptions) => ICacheManagerFactoryCleaners;
}
