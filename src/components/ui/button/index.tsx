import IButtonProps from "./button.type"

function Button({children, className, ...props}: IButtonProps) {
    return (
        <button
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            {...props}>
            {children}
        </button>
    )
}

export default Button
