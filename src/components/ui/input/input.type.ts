import type { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    containerClassName?: string
}

export default IInputProps;
