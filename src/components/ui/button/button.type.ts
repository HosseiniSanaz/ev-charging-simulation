import { ButtonHTMLAttributes } from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    variant?: "primary" | "secondary" | "muted"
    size?: "small" | "medium" | "large"
    loading?: boolean
    fullWidth?: boolean
    icon?: string
}

export default IButtonProps
