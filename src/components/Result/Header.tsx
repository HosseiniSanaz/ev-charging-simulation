function Header({children}: { children: React.ReactNode }) {
    return (
        <h2 className="text-lg font-semibold text-gray-800">
            {children}
        </h2>
    )
}

export default Header
