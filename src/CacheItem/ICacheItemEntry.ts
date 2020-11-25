import { IBaseCacheItem } from './IBaseCacheItem';

export interface ICacheItemEntry {
    entryState: "set" | "deleted"
    entryKey : string
    entry : IBaseCacheItem
}