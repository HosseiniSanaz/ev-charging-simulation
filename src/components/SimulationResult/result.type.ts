import {IChargingValue} from "./AggregatedChart/aggregated.type"
import {IEvent} from "./ChargingEvents/charging-events.type"
import {IExamplaryDay} from "./ExamplaryDayChart/examplary-day.type"
import IPowerDemandProps from "./PowerDemandChart/power-demand.type"

interface IResultProps {
    totalChargingEvents: number,
    chargingValues: IChargingValue[],
    chargingEvents: IEvent[],
    exemplaryDay: IExamplaryDay[],
    powerDemand: IPowerDemandProps['data']
}

export default IResultProps
