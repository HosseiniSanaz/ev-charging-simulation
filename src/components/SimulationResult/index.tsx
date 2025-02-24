import ChargingEvents from "./ChargingEvents"
import ExemplaryDayChart from "./ExamplaryDayChart"
import PowerDemandChart from "./PowerDemandChart"
import AggregatedChart from "./AggregatedChart"
import type IResultProps from "./result.type"
import GeneralReport from "./GeneralReport"

function SimulationResult({ peakPower, totalChargingEvents, chargingValues, chargingEvents, exemplaryDay, powerDemand }: IResultProps) {
    return (
        <div className="flex flex-col gap-6 text-left mt-8">
            <GeneralReport peakPower={peakPower} totalChargingEvents={totalChargingEvents} />
            <AggregatedChart data={chargingValues} />
            <ChargingEvents events={chargingEvents} />
            <ExemplaryDayChart data={exemplaryDay} />
            <PowerDemandChart data={powerDemand} />
        </div>
    )
}

export default SimulationResult
