import { IBaseCacheItem } from '../CacheItem/IBaseCacheItem';
import { ExpirationPipelineFunction } from './ExpirationPipelineFunction';
export declare type ExpirationFillter = (cacheItem: IBaseCacheItem, next: ExpirationPipelineFunction) => boolean;
