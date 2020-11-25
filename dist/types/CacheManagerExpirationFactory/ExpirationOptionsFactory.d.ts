import { IExpirationOptionsFactory } from "./IExpirationOptionsFactory";
import { ExpirationOptionsAddonsFactory } from './ExpirationOptionsAddonsFactory';
export declare class ExpirationOptionsFactory implements IExpirationOptionsFactory {
    useNeverExpiration(): ExpirationOptionsAddonsFactory;
    useNoExpiration(): ExpirationOptionsAddonsFactory;
    useSlidingExpiration(miliseconds: number): ExpirationOptionsAddonsFactory;
}
