interface NoCleanOption {
    type: "noClean";
}
interface PeriodicallyCleanOptions {
    type: "periodically";
    options: {
        miliseconds: number;
    };
}
export declare type ICleanOptions = NoCleanOption | PeriodicallyCleanOptions;
export {};
