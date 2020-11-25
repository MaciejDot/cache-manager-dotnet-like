export interface IConfigurableBaseCacheItem<T = any> {
    entry: T;
    slidingExpirationTime?: number;
    absoluteExpirationTime?: number;
    neverExpires?: boolean;
}
