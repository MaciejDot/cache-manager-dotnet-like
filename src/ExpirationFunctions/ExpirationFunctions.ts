import { ExpirationFillter } from './ExpirationFillter'

export const isExpiredSliding : ExpirationFillter = (item , next) => 
{
    return (item.slidingExpirationTime === undefined) ?
        next() : 
        (item.slidingExpirationTime + item.entryDate < Date.now() || next())
}

export const isExpiredAbsolute: ExpirationFillter = (item , next) => 
{
    return (item.absoluteExpirationTime === undefined )  ?
        next() : 
        ((item.absoluteExpirationTime < Date.now()) || 
        next())
}

export const neverExpires: ExpirationFillter = (item , next) => {
    return (item.neverExpires === undefined || !item.neverExpires) ? next() : false;
}
