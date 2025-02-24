import ReportCard from "components/ui/ReportCard"
import IGeneralReportProps from "./general-report.type"

function GeneralReport({ peakPower, totalChargingEvents }: IGeneralReportProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ReportCard>
                <p className="text-sm text-gray-500">Total Energy Charged</p>
                <p className="text-3xl font-bold text-blue-950">{totalChargingEvents.toFixed(2)} kWh</p>
            </ReportCard>
            <ReportCard>
                <p className="text-sm text-gray-500">Peak Power</p>
                <p className="text-3xl font-bold text-blue-950">{peakPower.toFixed(2)} kWh</p>
            </ReportCard>
        </div>
    )
}

export default GeneralReport