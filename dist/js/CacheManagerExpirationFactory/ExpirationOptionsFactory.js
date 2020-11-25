import { ExpirationOptionsAddonsFactory } from './ExpirationOptionsAddonsFactory';
export class ExpirationOptionsFactory {
    useNeverExpiration() {
        return new ExpirationOptionsAddonsFactory({
            type: "never"
        });
    }
    useNoExpiration() {
        return new ExpirationOptionsAddonsFactory({
            type: "notSet"
        });
    }
    useSlidingExpiration(miliseconds) {
        return new ExpirationOptionsAddonsFactory({
            type: "sliding",
            options: {
                millisecondsSlide: miliseconds
            }
        });
    }
}
