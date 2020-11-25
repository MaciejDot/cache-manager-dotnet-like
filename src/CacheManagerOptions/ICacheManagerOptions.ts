import { IExpirationOptions } from "../ExpirationOptions/IExpirationOptions";
import { IStore } from "../Store/IStore";
import { ICleanOptions } from './ICleanOptions';
import { SubscribtionFunction } from './SubscribtionFunction';

export interface ICacheManagerOptions {
    namespace: string
    store: IStore
    subscribeToChange: SubscribtionFunction[],
    cleanOptions: ICleanOptions
    expirationOptions: IExpirationOptions
}