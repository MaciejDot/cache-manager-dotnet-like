interface NoCleanOption {
    type: "noClean"
}

interface PeriodicallyCleanOptions {
    type : "periodically",
    options : {
        miliseconds : number
    }
}

export type ICleanOptions = NoCleanOption | PeriodicallyCleanOptions