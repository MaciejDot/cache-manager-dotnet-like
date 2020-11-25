import { ICleanOptions } from 'src/CacheManagerOptions/ICleanOptions';
import { SubscribtionFunction } from 'src/CacheManagerOptions/SubscribtionFunction';
import { CacheManager } from '../CacheManager/CacheManager';
import { IExpirationOptions } from '../ExpirationOptions/IExpirationOptions';
import { IStore } from '../Store/IStore';
import { ICacheManagerFactoryAddons } from './ICacheManagerFactoryAddons';
export declare class CacheManagerFactoryAddons implements ICacheManagerFactoryAddons {
    private _namespace;
    private _store;
    private _expirationOptions;
    private _cleanOptions;
    private _subscribeFunctions;
    constructor(options: {
        namespace: string;
        store: IStore;
        expirationOptions: IExpirationOptions;
        cleanOptions: ICleanOptions;
    });
    useSubscribeToChange(subscribtion: SubscribtionFunction): this;
    build(): CacheManager;
}
