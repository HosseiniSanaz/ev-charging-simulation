import type React from "react"
import IFormProps from "./form.type"
import Input from "components/ui/input"
import Button from "components/ui/button"

const InputForm: React.FC<IFormProps> = ({runSimulation}) => {

    async function onSubmit(formData: FormData) {
        await runSimulation(formData)
    }

    return (
        <div>
            <form action={onSubmit} className="space-y-4">
                <Input
                    type="number"
                    name="chargePoints"
                    label="Number of Charge Points"
                    defaultValue={20}
                    min={1}
                    max={100}
                    required/>
                <Input
                    type="number"
                    name="chargingPower"
                    label="Charging Power per Point (kW)"
                    defaultValue={11}
                    min={1}
                    step={0.1}
                    required/>
                <Input
                    type="number"
                    name="arrivalProbability"
                    label="Arrival Probability Multiplier (%)"
                    defaultValue={100}
                    min={20}
                    max={200}
                    required/>
                <Input
                    type="number"
                    name="carConsumption"
                    label="Car Consumption (kWh)"
                    defaultValue={18}
                    min={1}
                    step={0.1}
                    required/>


                <Button type="submit"> Run Simulation</Button>
            </form>
        </div>
    )
}

export default InputForm

