import InputForm from 'components/InputForm'
import './App.css'
import type IFormParams from "types/form-params.type"

function App() {

    const runSimulation = async (formData: FormData): Promise<IFormParams> => {
        console.log('runSimulation', formData)
        return {
            chargePoints: 1,
            arrivalProbability: 0.5,
            carConsumption: 10,
            chargingPower: 10,
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="w-1/2 mx-auto bg-red border border-gray-200 rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-semibold mb-6 text-center">EV Charging Simulation</h1>
                <InputForm runSimulation={runSimulation}/>
            </div>
        </div>
    )
}

export default App
