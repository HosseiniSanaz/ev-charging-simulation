function ReportCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex-1 flex flex-col rounded-md border border-gray-200 p-4 hover:bg-gray-200">
            {children}
        </div>
    )
}

export default ReportCard