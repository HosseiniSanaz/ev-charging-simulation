import { generateChargingValuesPerHour, generateExamplaryDayData } from "utils/chargingValues";
import IResultProps from "components/SimulationResult/result.type"
import { ChargingPair } from "types/form-params.type";

const mockData = (chargingPairs: ChargingPair[]): IResultProps => {
    const chargingValues = generateChargingValuesPerHour(chargingPairs)

    const result: IResultProps = {
        totalChargingEvents: 3650,
        chargingValues: chargingValues,
        chargingEvents: [
            {period: 'Year', events: 3650},
            {period: 'Month', events: 300},
            {period: 'Week', events: 70},
            {period: 'Day', events: 10},
        ],
        exemplaryDay: generateExamplaryDayData(chargingValues),
        powerDemand: {
            'hourly': [
                {hour: '00:00', power: 50},
                {hour: '01:00', power: 60},
                {hour: '02:00', power: 70},
                {hour: '03:00', power: 80},
                {hour: '04:00', power: 90},
                {hour: '05:00', power: 100},
                {hour: '06:00', power: 120},
                {hour: '07:00', power: 150},
                {hour: '08:00', power: 180},
                {hour: '09:00', power: 200},
                {hour: '10:00', power: 220},
                {hour: '11:00', power: 240},
                {hour: '12:00', power: 260},
                {hour: '13:00', power: 280},
                {hour: '14:00', power: 300},
                {hour: '15:00', power: 320},
                {hour: '16:00', power: 340},
                {hour: '17:00', power: 360},
                {hour: '18:00', power: 380},
                {hour: '19:00', power: 400},
                {hour: '20:00', power: 420},
                {hour: '21:00', power: 440},
                {hour: '22:00', power: 460},
                {hour: '23:00', power: 480},
            ],
            'daily': [
                {day: 'Monday', power: 5000},
                {day: 'Tuesday', power: 5200},
                {day: 'Wednesday', power: 5400},
                {day: 'Thursday', power: 5600},
                {day: 'Friday', power: 5800},
                {day: 'Saturday', power: 6000},
                {day: 'Sunday', power: 6200}
            ],
            'weekly': [
                {week: 'Week 1', power: 20000},
                {week: 'Week 2', power: 22000},
                {week: 'Week 3', power: 24000},
                {week: 'Week 4', power: 26000},
                {week: 'Week 5', power: 28000},
                {week: 'Week 6', power: 30000},
                {week: 'Week 7', power: 32000},
                {week: 'Week 8', power: 34000},
                {week: 'Week 9', power: 36000},
                {week: 'Week 10', power: 38000},
            ],
            'monthly': [
                {month: 'January', power: 80000},
                {month: 'February', power: 82000},
                {month: 'March', power: 84000},
                {month: 'April', power: 86000},
                {month: 'May', power: 88000},
                {month: 'June', power: 90000},
                {month: 'July', power: 92000},
                {month: 'August', power: 94000},
                {month: 'September', power: 96000},
                {month: 'October', power: 98000},
                {month: 'November', power: 100000},
                {month: 'December', power: 102000},
            ]
        }
    }
    return result;
}

export default mockData
