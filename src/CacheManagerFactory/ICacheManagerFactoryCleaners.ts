import { ICacheManagerFactoryAddons } from './ICacheManagerFactoryAddons';

export interface ICacheManagerFactoryCleaners {
    useNoClean:() => ICacheManagerFactoryAddons
    usePeriodicalClean:(miliseconds : number) => ICacheManagerFactoryAddons
}