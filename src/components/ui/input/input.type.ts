interface IInputProps {
    type: string
    name: string
    value?: string | number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label: string
    min?: number
    max?: number
    step?: number
    required?: boolean
    className?: string
    defaultValue?: string | number
}

export default IInputProps;