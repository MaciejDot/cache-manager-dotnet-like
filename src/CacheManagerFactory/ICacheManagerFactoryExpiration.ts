import { IExpirationOptionsFactory } from "../CacheManagerExpirationFactory/IExpirationOptionsFactory";
import { IExpirationOptions } from "../ExpirationOptions/IExpirationOptions";
import { ICacheManagerFactoryAddons } from "./ICacheManagerFactoryAddons";

export interface ICacheManagerFactoryExpiration {
  /**
     * Configure expiration for cache data
  */
    useExpiration: (expirationOptionsFunction: (expirationOptions: IExpirationOptionsFactory) => IExpirationOptions) => ICacheManagerFactoryAddons
  }