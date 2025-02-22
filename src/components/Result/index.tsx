import ChargingEvents from "./ChargingEvents"
import ExemplaryDayChart from "./ExamplaryDayChart"
import TotalEnergyCharged from "./TotalEnergyCharged"
import mockResult from "./mock"
import PowerDemandChart from "./PowerDemandChart"
import AggregatedChart from "./AggregatedChart"

function Result() {
    const result = mockResult
    return (
        <div className="flex flex-col gap-6 text-left mt-8">
            <TotalEnergyCharged value={result.totalChargingEvents}/>
            <AggregatedChart data={result.chargingValues}/>
            <ChargingEvents events={result.chargingEvents}/>
            <ExemplaryDayChart data={result.exemplaryDay}/>
            <PowerDemandChart data={result.powerDemand}/>
        </div>
    )
}

export default Result
