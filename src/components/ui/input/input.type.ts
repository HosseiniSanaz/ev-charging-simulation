import type { InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
}

export default IInputProps;
