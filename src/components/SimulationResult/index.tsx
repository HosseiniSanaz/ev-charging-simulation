import ChargingEvents from "./ChargingEvents"
import ExemplaryDayChart from "./ExamplaryDayChart"
import TotalEnergyCharged from "./TotalEnergyCharged"
import PowerDemandChart from "./PowerDemandChart"
import AggregatedChart from "./AggregatedChart"
import type IResultProps from "./result.type"

function SimulationResult({ totalChargingEvents, chargingValues, chargingEvents, exemplaryDay, powerDemand }: IResultProps) {
    return (
        <div className="flex flex-col gap-6 text-left mt-8">
            <TotalEnergyCharged value={totalChargingEvents} />
            <AggregatedChart data={chargingValues} />
            <ChargingEvents events={chargingEvents} />
            <ExemplaryDayChart data={exemplaryDay} />
            <PowerDemandChart data={powerDemand} />
        </div>
    )
}

export default SimulationResult
