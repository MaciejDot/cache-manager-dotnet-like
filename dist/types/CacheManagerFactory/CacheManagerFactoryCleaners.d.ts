import { IExpirationOptions } from '../ExpirationOptions/IExpirationOptions';
import { IStore } from '../Store/IStore';
import { CacheManagerFactoryAddons } from './CacheManagerFactoryAddons';
import { ICacheManagerFactoryCleaners } from './ICacheManagerFactoryCleaners';
export declare class CacheManagerFactoryCleaners implements ICacheManagerFactoryCleaners {
    private _namespace;
    private _store;
    private _expirationOptions;
    constructor(options: {
        namespace: string;
        store: IStore;
        expirationOptions: IExpirationOptions;
    });
    useNoClean(): CacheManagerFactoryAddons;
    usePeriodicalClean(miliseconds: number): CacheManagerFactoryAddons;
}
