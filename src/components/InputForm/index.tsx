import type React from "react"
import { useForm, SubmitHandler, FormProvider } from "react-hook-form"
import IFormProps from "./form.type"
import IFormParams from "types/form-params.type"
import Input from "components/ui/input"
import Button from "components/ui/button"
import { useCallback, useState } from "react"
import ChargePointsConfig from "./ChargePointsConfig";

const InputForm: React.FC<IFormProps> = ({ runSimulation }) => {
    const methods = useForm<IFormParams>({
        defaultValues: {
            chargingPairs: [{ chargePoints: 20, chargingPower: 11 }],
            arrivalProbability: 100,
            carConsumption: 18
        },
        mode: "onChange"
    })
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods

    const [loading, setLoading] = useState(false);


    const onSubmit: SubmitHandler<IFormParams> = useCallback(async (data: IFormParams) => {
        setLoading(true);
        try {
            setTimeout(async () => {
                const formData = new FormData();

                formData.append('chargingPairs', JSON.stringify(data.chargingPairs));
                formData.append('arrivalProbability', data.arrivalProbability.toString());
                formData.append('carConsumption', data.carConsumption.toString());

                await runSimulation(formData);
                setLoading(false);
            }, 1000);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    }, [runSimulation]);


    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                <ChargePointsConfig />

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

                <Input
                    type="number"
                    label="Car Consumption (kWh)"
                    error={errors.carConsumption?.message}
                    {...register("carConsumption", {
                        required: "This field is required",
                        min: { value: 1, message: "Minimum value is 1" },
                    })}
                />

                <Button type="submit" fullWidth size="large" className="mt-2" loading={loading}>Run Simulation</Button>
            </form>
        </FormProvider>
    )
}

export default InputForm
