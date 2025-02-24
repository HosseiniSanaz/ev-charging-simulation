import { useFieldArray, useFormContext } from "react-hook-form";
import Input from "components/ui/input";
import Button from "components/ui/button";
import IconButton from "components/ui/icon-button";
import IFormParams from "types/form-params.type";
import { useMemo } from "react";
import { MAX_CHARGE_POINTS, MAX_CHARGING_POWER } from "constants/index";

function ChargePointsConfig() {
    const {
        control,
        formState: { errors },
        register,
        watch,
    } = useFormContext<IFormParams>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "chargingPairs",
        rules: {
            validate: (value) => {
                if (value.length === 0) {
                    return "At least one charging pair is required";
                }
                const sum = value.reduce((sum, pair) => sum + Number(pair.chargePoints), 0);
                if (sum > MAX_CHARGE_POINTS) {
                    return "Maximum number of charge points should not exceed 20";
                }
                return true;
            }
        }
    });

    const warchChargingPairs = watch('chargingPairs');

    const totalPower = useMemo(() => (
        warchChargingPairs.reduce((sum, pair) =>
            sum + (Number(pair.chargePoints) * Number(pair.chargingPower)), 0)
    ), [JSON.stringify(warchChargingPairs)]);

    const generalError: string | undefined = errors.chargingPairs?.root?.message;

    return (
        <div>
            <div className={`grid ${fields.length > 1 ? 'grid-cols-9 md:grid-cols-11' : 'grid-cols-8 md:grid-cols-10'} gap-4 items-end mb-1`}>
                <span className="text-xs md:text-sm font-medium text-gray-700 col-span-4 md:col-span-5"># Charge Points</span>
                <span className={`text-xs md:text-sm font-medium text-gray-700 ${fields.length > 1 ? 'col-span-5 md:col-span-6' : 'col-span-4 md:col-span-5'}`}>Charging Power (kW)</span>
            </div>
            {fields.map((field, index) => (
                <div key={field.id} className={`grid ${fields.length > 1 ? 'grid-cols-9 md:grid-cols-11' : 'grid-cols-8 md:grid-cols-10'} gap-2 md:gap-4 items-start mb-1`}>
                    <Input
                        type="number"
                        containerClassName="col-span-4 md:col-span-5"
                        error={errors.chargingPairs?.[index]?.chargePoints?.message}
                        {...register(`chargingPairs.${index}.chargePoints` as const, {
                            required: "This field is required",
                            min: { value: 1, message: "Minimum value is 1" },
                            max: { value: MAX_CHARGE_POINTS, message: "Maximum value is " + MAX_CHARGE_POINTS },
                        })}
                    />

                    <Input
                        type="number"
                        containerClassName="col-span-4 md:col-span-5"
                        error={errors.chargingPairs?.[index]?.chargingPower?.message}
                        {...register(`chargingPairs.${index}.chargingPower` as const, {
                            required: "This field is required",
                            min: { value: 1, message: "Minimum value is 1" },
                        })}
                    />
                    {fields.length > 1 && (
                        <IconButton
                            variant="danger"
                            size="small"
                            onClick={() => remove(index)}
                            icon="delete"
                            className="mt-2"
                        />
                    )}
                </div>
            ))}

            {totalPower > MAX_CHARGING_POWER && (
                <p className="text-sm text-red-600">
                    Total power across all pairs must not exceed {MAX_CHARGING_POWER}kW
                </p>
            )}

            {generalError && (
                <p className="text-sm text-red-600">
                    {generalError}
                </p>
            )}

            <div className="flex flex-col-reverse md:flex-row justify-end items-center gap-2 mt-4 mb-8">
                <span className="text-right text-sm text-gray-600">
                    Total Power: {totalPower}kW / {MAX_CHARGING_POWER}kW
                </span>
                <Button
                    type="button"
                    variant="muted"
                    icon="add"
                    className="w-full md:w-fit"
                    onClick={() => append({ chargePoints: 1, chargingPower: 1 })}
                >
                    Add Another Pair
                </Button>
            </div>
        </div>
    );
}

export default ChargePointsConfig;
