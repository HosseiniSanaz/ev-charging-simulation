import { forwardRef } from 'react'
import type IInputProps from "./input.type"

const Input = forwardRef<HTMLInputElement, IInputProps>(({
    name,
    label,
    className = "",
    containerClassName = "",
    error,
    ...props
}, ref) => {
    return (
        <div className={"flex flex-col gap-2 items-start "+ containerClassName}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={name}
                name={name}
                ref={ref}
                className={"p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-950 focus:ring focus:ring-blue-900 focus:ring-opacity-50 " + className}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    )
})

Input.displayName = 'Input'

export default Input
