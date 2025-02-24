import IFormParams from "types/form-params.type";
import mockData from "./mock-data"

function useMockData(input: IFormParams) {
    const mockResult = mockData(input);
    return mockResult
}

export default useMockData