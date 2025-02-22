import type IInputProps from "./input.type"

function Input({name, label, className, ...props}: IInputProps) {
    return (
        <div className="flex flex-col gap-2 items-start">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                className={"p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-950 focus:ring focus:ring-blue-900 focus:ring-opacity-50 " + className}
                {...props}
            />
        </div>
    )
}

export default Input;
