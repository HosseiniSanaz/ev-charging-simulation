import mockData from "./mock-data"
import IMockData from "./mock-data.type"

function useMockData({numChargePoints, chargingPower}: IMockData) {
    const mockResult = mockData({numChargePoints, chargingPower});
    return mockResult
}

export default useMockData