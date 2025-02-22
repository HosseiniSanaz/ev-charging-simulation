import InputForm from 'components/InputForm'
import './App.css'
import type IFormParams from "types/form-params.type"

function App() {

    const runSimulation = async (formData: FormData): Promise<IFormParams> => {
        return {
            chargePoints: Number(formData.get('chargePoints')) || 0,
            arrivalProbability: Number(formData.get('arrivalProbability')) || 0,
            carConsumption: Number(formData.get('carConsumption')) || 0,
            chargingPower: Number(formData.get('chargingPower')) || 0,
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
