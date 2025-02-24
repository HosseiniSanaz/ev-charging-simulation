interface IPowerDemandProps {
    data: {
        hourly: IPowerDemandHourly[],
        daily: IPowerDemandDaily[],
        weekly: IPowerDemandWeekly[],
        monthly: IPowerDemandMonthly[]
    }
}

export interface IPowerDemandHourly {
    hour: string
    power: number
}

export interface IPowerDemandDaily {
    day: string
    power: number
}

export interface IPowerDemandWeekly {
    week: string
    power: number
}

export interface IPowerDemandMonthly {
    month: string
    power: number
}

export default IPowerDemandProps