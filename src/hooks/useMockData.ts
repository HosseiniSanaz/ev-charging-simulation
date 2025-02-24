import { ChargingPair } from "types/form-params.type";
import mockData from "./mock-data"

function useMockData(chargingPairs: ChargingPair[]) {
    const mockResult = mockData(chargingPairs);
    return mockResult
}

export default useMockData