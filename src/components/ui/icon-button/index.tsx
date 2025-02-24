import IIconButtonProps from "./icon-button.type";

function IconButton({ icon, size = "medium", variant = "primary", disabled = false, className = "", ...props }: IIconButtonProps) {

    const variantClasses = {
        primary: "text-blue-900 hover:text-blue-950",
        secondary: "text-gray-900 hover:text-gray-950",
        muted: "text-gray-900 hover:text-gray-950",
        danger: "text-gray-500 hover:text-red-900",
    }
    const sizeClasses = {
        small: "p-2 text-sm",
        medium: "py-2 px-4 text-base",
        large: "py-4 px-6 text-lg",
    }
    const loadingClasses = disabled ? "opacity-50 cursor-not-allowed" : ""
    return (
        <button {...props} className={`${loadingClasses} w-fit h-fit ${className}`}>
            <span className={`material-symbols-outlined ${variantClasses[variant]} ${sizeClasses[size]} cursor-pointer`}>{icon}</span>
        </button>
    )
}
export default IconButton;