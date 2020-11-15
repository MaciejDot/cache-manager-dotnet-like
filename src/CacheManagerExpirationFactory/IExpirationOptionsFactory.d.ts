import { Type } from "typescript";
import { IBaseCacheItem } from "../CacheItem/IBaseCacheItem";
import {IExpirationOptionsAddonsFactory} from "./IExpirationOptionsAddonsFactory"

export interface IExpirationOptionsFactory 
{
        /**
   * set time of expiration in miliseconds
   *
   * @param miliseconds  time in miliseconds after which record will no longer be cached
   */
    useSlidingExpiration: (miliseconds: number) => IExpirationOptionsAddonsFactory
        /**
   * set expiration function
   *
   * @param isExpired  expiration function
   */
    useCustomExpiration: (isExpired: (item: IBaseCacheItem) => boolean) => IExpirationOptionsAddonsFactory
}