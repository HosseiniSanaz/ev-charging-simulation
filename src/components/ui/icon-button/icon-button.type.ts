import { ButtonHTMLAttributes } from "react"

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string
    size?: "small" | "medium" | "large"
    variant?: "primary" | "secondary" | "muted" | "danger"
    disabled?: boolean
}

export default IIconButtonProps