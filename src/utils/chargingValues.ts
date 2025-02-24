import { IChargingValue } from "components/SimulationResult/AggregatedChart/aggregated.type";
import { IExamplaryDay } from "components/SimulationResult/ExamplaryDayChart/examplary-day.type";

export function generateRandomChargingValues(numChargePoints: number, chargingPower: number): IChargingValue[] {
    const values: any[] = [];
    const maxTotal = 220;
    let remainingPower = maxTotal;

    for (let i = 0; i < numChargePoints; i++) {
        // use remaining power for the last charge point
        if (i === numChargePoints - 1) {
            values.push({
                name: `chargePoint${i + 1}`,
                value: Math.min(remainingPower, chargingPower)
            });
            break;
        }

        const maxPowerPerPoint = remainingPower / (numChargePoints - i);
        const maxValue = Math.min(maxPowerPerPoint, chargingPower);

        const value = Math.floor(Math.random() * (maxValue - 1) + 1);

        values.push({
            name: `chargePoint${i + 1}`,
            value: value
        });

        remainingPower -= value;
    }

    return values;
}

export const generateChargingValuesPerHour = (numChargePoints: number, chargingPower: number): IChargingValue[] => {
    const times = []
    for (let j = 0; j < 24; j++) {
        times.push(`${j < 10 ? '0' + j : j}:00`)
    }
    const chargingValues: IChargingValue[] = times.map((time) => {
        const values: any[] = generateRandomChargingValues(numChargePoints, chargingPower)
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