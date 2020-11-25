import { ExpirationFillter } from '../ExpirationFunctions/ExpirationFillter';
import { IExpirationOptions } from "../ExpirationOptions/IExpirationOptions";
export interface IExpirationOptionsAddonsFactory {
    /**
     * use Fillter
     */
    useFillter: (fillter: ExpirationFillter) => IExpirationOptionsAddonsFactory;
    /**
* build options
*/
    build: () => IExpirationOptions;
}
