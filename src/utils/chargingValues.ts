import { IChargingValue } from "components/SimulationResult/AggregatedChart/aggregated.type";
import { IExamplaryDay } from "components/SimulationResult/ExamplaryDayChart/examplary-day.type";
import { ChargingPair } from "types/form-params.type";
import { MAX_CHARGING_POWER } from "constants/index"
;
export function generateRandomChargingValues(chargingPairs: ChargingPair[]): IChargingValue[] {
    const values: any[] = [];
    const maxTotal = MAX_CHARGING_POWER;
    let remainingPower = maxTotal;

    let chargePointIndex = 1;
    for (let k = 0; k < chargingPairs.length; k++) {
        const { chargePoints, chargingPower } = chargingPairs[k];
        
        for (let i = 0; i < chargePoints; i++) {
            // use remaining power for the last charge point
            if (i === chargePoints - 1 && k === chargingPairs.length - 1) {
                values.push({
                    name: `chargePoint${chargePointIndex} - ${chargingPower}kWh`,
                    value: Math.floor(Math.random() * (Math.min(remainingPower, chargingPower) - 1) + 1)
                });
                break;
            }

            const maxPowerPerPoint = remainingPower / (chargePoints - i);
            const maxValue = Math.min(maxPowerPerPoint, chargingPower);

            const value = Math.floor(Math.random() * (maxValue - 1) + 1);

            values.push({
                name: `chargePoint${chargePointIndex++} - ${chargingPower}kWh`,
                value: value
            });
        }
    }

    return values;
}

export const generateChargingValuesPerHour = (chargingPairs: ChargingPair[]): IChargingValue[] => {
    const times = []
    for (let j = 0; j < 24; j++) {
        times.push(`${j < 10 ? '0' + j : j}:00`)
    }
    const chargingValues: IChargingValue[] = times.map((time) => {
        const values: any[] = generateRandomChargingValues(chargingPairs)
        return {
            time: time,
            ...values.reduce((acc, curr) => {
                acc[curr.name] = curr.value;
                return acc;
            }, {})
        }
    })

    return chargingValues;
}

export const generateExamplaryDayData = (data: IChargingValue[]): IExamplaryDay[] => {
    const result: IExamplaryDay[] = data.map((value) => {
        const power = Object.entries(value)
            .filter(([key]) => key.startsWith('chargePoint'))
            .reduce((acc: number, [_, value]: [string, number]) => acc + value, 0);
        return {
            time: value.time,
            power
        }
    })
    return result
}