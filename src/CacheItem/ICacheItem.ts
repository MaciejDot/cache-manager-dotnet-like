import { IBaseCacheItem } from "./IBaseCacheItem"
export interface ICacheItem<T> extends IBaseCacheItem {
    entry: T
}