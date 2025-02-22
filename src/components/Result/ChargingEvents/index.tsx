import Header from "../Header"
import IChargingEventsProps, {IEvent} from "./charging-events.type"

function ChargingEvents({events}: IChargingEventsProps) {
    return (
        <div className="flex flex-col gap-2">
            <Header>Charging Events</Header>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {events.map((item: any) => (
                    <Event period={item.period} events={item.events}/>
                ))}
            </div>
        </div>
    )
}

function Event({period, events}: IEvent) {
    return (
        <div className="flex-1 flex flex-col rounded-md border border-gray-200 p-4 hover:bg-gray-200">
            <p className="text-sm text-gray-500">Per <span className="capitalize">{period}</span></p>
            <p className="text-lg font-bold text-blue-950">{events}</p>
        </div>
    )
}

export default ChargingEvents
