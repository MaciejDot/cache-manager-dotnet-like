import { IExpirationOptionsAddonsFactory } from "./IExpirationOptionsAddonsFactory";
export interface IExpirationOptionsFactory {
    /**
* Use none expiration function
*
*
*/
    useNoExpiration: () => IExpirationOptionsAddonsFactory;
    /**
* Use never expiration function
*
*
*/
    useNeverExpiration: () => IExpirationOptionsAddonsFactory;
    /**
* set time of expiration in miliseconds
*
* default expiration function for items with unset expiration
*
* @param miliseconds  time in miliseconds after which record will no longer be cached
*/
    useSlidingExpiration: (miliseconds: number) => IExpirationOptionsAddonsFactory;
}
