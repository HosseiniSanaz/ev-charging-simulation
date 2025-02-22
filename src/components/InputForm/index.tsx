import type React from "react"
import {useForm, SubmitHandler} from "react-hook-form"
import IFormProps from "./form.type"
import IFormParams from "types/form-params.type"
import Input from "components/ui/input"
import Button from "components/ui/button"


const InputForm: React.FC<IFormProps> = ({runSimulation}) => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<IFormParams>({
        defaultValues: {
            chargePoints: 20,
            chargingPower: 11,
            arrivalProbability: 100,
            carConsumption: 18
        }
    });

    const onSubmit: SubmitHandler<IFormParams> = async (data) => {
        try {
            const formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value.toString());
            });
            await runSimulation(formData);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                <div>
                    <Input
                        type="number"
                        label="Number of Charge Points"
                        {...register("chargePoints", {
                            required: "This field is required",
                            min: {value: 1, message: "Minimum value is 1"},
                            max: {value: 100, message: "Maximum value is 100"}
                        })}
                    />
                    {errors.chargePoints && (
                        <p className="mt-1 text-sm text-red-600">{errors.chargePoints.message}</p>
                    )}
                </div>

                <div>
                    <Input
                        type="number"
                        label="Charging Power per Point (kW)"
                        {...register("chargingPower", {
                            required: "This field is required",
                            min: {value: 1, message: "Minimum value is 1"},
                        })}
                    />
                    {errors.chargingPower && (
                        <p className="mt-1 text-sm text-red-600">{errors.chargingPower.message}</p>
                    )}
                </div>

                <div>
                    <Input
                        type="number"
                        label="Arrival Probability Multiplier (%)"
                        {...register("arrivalProbability", {
                            required: "This field is required",
                            min: {value: 20, message: "Minimum value is 20"},
                            max: {value: 200, message: "Maximum value is 200"}
                        })}
                    />
                    {errors.arrivalProbability && (
                        <p className="mt-1 text-sm text-red-600">{errors.arrivalProbability.message}</p>
                    )}
                </div>

                <div>
                    <Input
                        type="number"
                        label="Car Consumption (kWh)"
                        {...register("carConsumption", {
                            required: "This field is required",
                            min: {value: 1, message: "Minimum value is 1"},
                        })}
                    />
                    {errors.carConsumption && (
                        <p className="mt-1 text-sm text-red-600">{errors.carConsumption.message}</p>
                    )}
                </div>

                <Button type="submit" fullWidth size="large" className="mt-2">Run Simulation</Button>
            </form>
        </div>
    )
}

export default InputForm
