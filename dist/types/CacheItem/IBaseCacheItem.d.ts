import { IConfigurableBaseCacheItem } from './IConfigurableBaseCacheItem';
export interface IBaseCacheItem<T = any> extends IConfigurableBaseCacheItem<T> {
    entryDate: number;
}
