interface IButtonProps {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    type?: "button" | "submit" | "reset"
    variant?: "primary" | "secondary" | "muted"
    size?: "small" | "medium" | "large"
    disabled?: boolean
    loading?: boolean
    fullWidth?: boolean
}

export default IButtonProps