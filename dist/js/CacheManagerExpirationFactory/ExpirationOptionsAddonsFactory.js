export class ExpirationOptionsAddonsFactory {
    constructor(expirationOption) {
        this._fillters = [];
        this._expirationOption = expirationOption;
    }
    useFillter(fillter) {
        this._fillters.push(fillter);
        return this;
    }
    ;
    build() {
        return {
            expirationFillters: this._fillters,
            defaultExpirtaionOption: this._expirationOption
        };
    }
}
