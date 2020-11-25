import { IBaseCacheItem } from '../CacheItem/IBaseCacheItem';
import { ExpirationPipelineFunction } from './ExpirationPipelineFunction';

export type ExpirationFillter = (cacheItem : IBaseCacheItem, next : ExpirationPipelineFunction) => boolean;