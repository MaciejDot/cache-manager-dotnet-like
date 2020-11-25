import { ExpirationFillter } from "../ExpirationFunctions/ExpirationFillter"

interface IExpirationNotSetOptions {
    type: "notSet"
}

interface IExpirationSlidingOptions {
    type: "sliding"
    options : { millisecondsSlide : number}
}

interface IExpirationNeverOptions {
    type: "never"
}

export type DefaultExpirationOption = IExpirationSlidingOptions | IExpirationNotSetOptions | IExpirationNeverOptions;

export interface IExpirationOptions {
    defaultExpirtaionOption: DefaultExpirationOption,
    expirationFillters: ExpirationFillter[]
}