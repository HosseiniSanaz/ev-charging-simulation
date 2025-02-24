import type React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import IFormProps from "./form.type"
import IFormParams from "types/form-params.type"
import Input from "components/ui/input"
import Button from "components/ui/button"
import { useCallback, useState } from "react"


const InputForm: React.FC<IFormProps> = ({ runSimulation }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<IFormParams>({
        defaultValues: {
            chargePoints: 20,
            chargingPower: 11,
            arrivalProbability: 100,
            carConsumption: 18
        },
        mode: "onChange"
    });
    const [loading, setLoading] = useState(false);

    const chargePoints = watch("chargePoints");
    const chargingPower = watch("chargingPower");

    const onSubmit: SubmitHandler<IFormParams> = useCallback(async (data) => {
        setLoading(true);
        try {
            setTimeout(async () => {
                const formData = new FormData();
                Object.entries(data).forEach(([key, value]) => {
                    formData.append(key, value.toString());
                });
                await runSimulation(formData);
                setLoading(false);
            }, 1000);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    }, [runSimulation]);

    const validateTotalPower = (value: number, otherValue: number) => {
        const numValue = Number(value);
        const numOtherValue = Number(otherValue);
        return (numValue && numOtherValue && numValue * numOtherValue <= 220) ||
            "Total power (Charge Points × Charging Power) must not exceed 220kW";
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                <div>
                    <Input
                        type="number"
                        label="Number of Charge Points"
                        error={errors.chargePoints?.message}
                        {...register("chargePoints", {
                            required: "This field is required",
                            min: { value: 1, message: "Minimum value is 1" },
                            max: { value: 100, message: "Maximum value is 100" },
                            validate: (value) => validateTotalPower(value, chargingPower)
                        })}
                    />
                </div>

                <div>
                    <Input
                        type="number"
                        label="Charging Power per Point (kW)"
                        error={errors.chargingPower?.message}
                        {...register("chargingPower", {
                            required: "This field is required",
                            min: { value: 1, message: "Minimum value is 1" },
                            validate: (value) => validateTotalPower(value, chargePoints)
                        })}
                    />
                </div>

                <div>
                    <Input
                        type="number"
                        label="Arrival Probability Multiplier (%)"
                        error={errors.arrivalProbability?.message}
                        {...register("arrivalProbability", {
                            required: "This field is required",
                            min: { value: 20, message: "Minimum value is 20" },
                            max: { value: 200, message: "Maximum value is 200" }
                        })}
                    />
                </div>

                <div>
                    <Input
                        type="number"
                        label="Car Consumption (kWh)"
                        error={errors.carConsumption?.message}
                        {...register("carConsumption", {
                            required: "This field is required",
                            min: { value: 1, message: "Minimum value is 1" },
                        })}
                    />
                </div>

                <Button type="submit" fullWidth size="large" className="mt-2" loading={loading}>Run Simulation</Button>
            </form>
        </div>
    )
}

export default InputForm
