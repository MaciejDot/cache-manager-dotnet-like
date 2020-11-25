import { ExpirationFillter } from '../ExpirationFunctions/ExpirationFillter';
import { DefaultExpirationOption, IExpirationOptions } from '../ExpirationOptions/IExpirationOptions';
import { IExpirationOptionsAddonsFactory } from './IExpirationOptionsAddonsFactory';

export class ExpirationOptionsAddonsFactory  implements
IExpirationOptionsAddonsFactory{
        private _fillters : ExpirationFillter[] = [];
        private _expirationOption : DefaultExpirationOption;

        constructor(expirationOption : DefaultExpirationOption){
            this._expirationOption = expirationOption
        }

        useFillter(fillter: ExpirationFillter){
            this._fillters.push(fillter)
            return this
        };
        
        build () {
            return {
                expirationFillters : this._fillters,
                defaultExpirtaionOption : this._expirationOption 
            } as IExpirationOptions
        }

}