export const isExpiredSliding = (item, next) => {
    return (item.slidingExpirationTime === undefined) ?
        next() :
        (item.slidingExpirationTime + item.entryDate < Date.now() || next());
};
export const isExpiredAbsolute = (item, next) => {
    return (item.absoluteExpirationTime === undefined) ?
        next() :
        ((item.absoluteExpirationTime < Date.now()) ||
            next());
};
export const neverExpires = (item, next) => {
    return (item.neverExpires === undefined || !item.neverExpires) ? next() : false;
};
