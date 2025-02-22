interface IInputProps {
    type: string
    name: string
    value?: string | number
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    label: string
    min?: string | number
    max?: string | number
    step?: string | number
    required?: boolean
    className?: string
    defaultValue?: string | number
}

export default IInputProps;
