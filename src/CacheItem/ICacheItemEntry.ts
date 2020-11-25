import { IBaseCacheItem } from './IBaseCacheItem';

export interface ICacheItemEntry {
    entryState: "set" | "deleted" | "init"
    entryKey : string
    entry : IBaseCacheItem
}