import { IExpirationOptionsFactory } from "./IExpirationOptionsFactory";
import { ExpirationOptionsAddonsFactory } from './ExpirationOptionsAddonsFactory';

export class ExpirationOptionsFactory implements
    IExpirationOptionsFactory
    {
        useNeverExpiration(){
            return new ExpirationOptionsAddonsFactory({
                type: "never"
            })
        }

        useNoExpiration(){
            return new ExpirationOptionsAddonsFactory({
                type: "notSet"
            })
        }

        useSlidingExpiration(miliseconds: number) {
            return new ExpirationOptionsAddonsFactory({
                type: "sliding",
                options: {
                    millisecondsSlide : miliseconds
                }
            })
        }
}
