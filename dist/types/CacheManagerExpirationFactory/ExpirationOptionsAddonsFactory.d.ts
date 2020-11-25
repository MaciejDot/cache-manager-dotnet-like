import { ExpirationFillter } from '../ExpirationFunctions/ExpirationFillter';
import { DefaultExpirationOption, IExpirationOptions } from '../ExpirationOptions/IExpirationOptions';
import { IExpirationOptionsAddonsFactory } from './IExpirationOptionsAddonsFactory';
export declare class ExpirationOptionsAddonsFactory implements IExpirationOptionsAddonsFactory {
    private _fillters;
    private _expirationOption;
    constructor(expirationOption: DefaultExpirationOption);
    useFillter(fillter: ExpirationFillter): this;
    build(): IExpirationOptions;
}
