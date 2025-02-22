import IButtonProps from "./button.type"

function Button(
    {
        children,
        className,
        variant = "primary",
        size = "medium",
        fullWidth = false,
        ...props
    }: IButtonProps) {
    const variantClasses = {
        primary: "bg-blue-900 hover:bg-blue-950 text-white",
        secondary: "bg-gray-900 hover:bg-gray-950 text-white",
        muted: "bg-gray-200 hover:bg-gray-300 text-gray-900",
    }
    const sizeClasses = {
        small: "p-2 text-sm",
        medium: "py-2 px-4 text-base",
        large: "py-4 px-6 text-lg",
    }
    const fullWidthClasses = fullWidth ? "w-full" : ""
    return (
        <button
            className={`${fullWidthClasses} ${variantClasses[variant]} ${sizeClasses[size]} border border-transparent rounded-md shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2` + " " + className}
            {...props}>
            {children}
        </button>
    )
}

export default Button
