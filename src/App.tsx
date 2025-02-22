import InputForm from 'components/InputForm'
import './App.css'
import type IFormParams from "types/form-params.type"
import Result from 'components/Result'

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
        <div className="min-h-screen bg-gray-100 py-4 lg:py-8 flex flex-col justify-center">
            <div className="w-full lg:w-3/4 xl:w-1/2 mx-auto bg-red lg:border lg:border-gray-200 lg:rounded-lg lg:shadow-md p-6">
                <h1 className="text-3xl font-semibold mb-6 text-center text-blue-900">EV Charging Simulation</h1>
                <InputForm runSimulation={runSimulation}/>
                <Result />
            </div>
        </div>
    )
}

export default App
