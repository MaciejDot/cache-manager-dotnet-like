import { IExpirationOptions } from "../ExpirationOptions/IExpirationOptions";

export interface IExpirationOptionsAddonsFactory {
       /**
   * build options
   */
    build: () => IExpirationOptions
}