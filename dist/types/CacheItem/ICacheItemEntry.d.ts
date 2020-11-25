import { IBaseCacheItem } from './IBaseCacheItem';
export interface ICacheItemEntry {
    entryState: "set" | "deleted";
    entry: IBaseCacheItem;
}
