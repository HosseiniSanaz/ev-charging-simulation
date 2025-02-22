interface IChargingValuesProps {
    data: IChargingValue[]
}

export interface IChargingValue {
    time: string

    [key: `chargepoint${number}`]: number
}

export default IChargingValuesProps
