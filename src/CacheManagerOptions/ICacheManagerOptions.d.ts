import { IExpirationOptions } from "../ExpirationOptions/IExpirationOptions";
import { IStore } from "../Store/IStore";

export interface ICacheManagerOptions {
    namespace: string
    store: IStore
    expirationOptions: IExpirationOptions
}