import InputForm from 'components/InputForm'
import './App.css'
import type IFormParams from "types/form-params.type"
import Result from 'components/SimulationResult'
import useMockData from 'hooks/useMockData'
import type IResultProps from 'components/SimulationResult/result.type'
import { useMemo, useState } from 'react'

function App() {
    const [formData, setFormData] = useState<IFormParams>({
        chargingPairs: [],
        arrivalProbability: 0,
        carConsumption: 0,
    })
    const simulationResult: IResultProps = useMockData(formData.chargingPairs)

    const showSimulation = useMemo(() => formData.chargingPairs.length > 0 && formData.chargingPairs.every((pair) => pair.chargePoints > 0 && pair.chargingPower > 0), [formData.chargingPairs])

    const runSimulation = async (formData: FormData): Promise<void> => {
        setFormData({
            chargingPairs: JSON.parse(formData.get('chargingPairs') as string) || [],
            arrivalProbability: Number(formData.get('arrivalProbability')) || 0,
            carConsumption: Number(formData.get('carConsumption')) || 0,
        })
    }

    return (
        <div className="min-h-screen bg-gray-100 py-4 lg:py-8 flex flex-col justify-center">
            <div className="w-full lg:w-3/4 xl:w-1/2 mx-auto bg-red lg:border lg:border-gray-200 lg:rounded-lg lg:shadow-md p-6">
                <h1 className="text-3xl font-semibold mb-6 text-center text-blue-900">EV Charging Simulation</h1>
                <InputForm runSimulation={runSimulation} />
                {showSimulation && <Result {...simulationResult} />}
            </div>
        </div>
    )
}

export default App
