export interface ChargingPair {
    chargePoints: number;
    chargingPower: number;
}

interface IFormParams {
    chargingPairs: ChargingPair[];
    arrivalProbability: number;
    carConsumption: number;
}

export default IFormParams;
