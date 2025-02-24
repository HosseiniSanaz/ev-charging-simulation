interface IChargingEventsProps {
    events: IEvent[]
}

export interface IEvent {
    period: string
    events: number
}

export default IChargingEventsProps