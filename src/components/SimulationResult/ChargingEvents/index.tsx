import ReportSectionHeader from "components/ui/ReportSectionHeader"
import IChargingEventsProps, {IEvent} from "./charging-events.type"
import ReportCard from "components/ui/ReportCard"

function ChargingEvents({events}: IChargingEventsProps) {
    return (
        <div className="flex flex-col gap-2">
            <ReportSectionHeader>Charging Events</ReportSectionHeader>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {events.map((item: any) => (
                    <Event key={item.period} period={item.period} events={item.events}/>
                ))}
            </div>
        </div>
    )
}

function Event({period, events}: IEvent) {
    return (
        <ReportCard>
            <p className="text-sm text-gray-500">Per <span className="capitalize">{period}</span></p>
            <p className="text-lg font-bold text-blue-950">{events}</p>
        </ReportCard>
    )
}

export default ChargingEvents
