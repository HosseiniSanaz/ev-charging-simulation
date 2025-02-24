import {ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Area} from "recharts";
import IExamplaryDayChartProps from "./examplary-day.type"
import ReportSectionHeader from "components/ui/ReportSectionHeader";

const ExemplaryDayChart = ({data}: IExamplaryDayChartProps) => {
    return (
        <div className="flex flex-col gap-1">
            <ReportSectionHeader>Exemplary Day Chart</ReportSectionHeader>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data} margin={{top: 50}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="time"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Area 
                        type="monotone" 
                        dataKey="power" 
                        stroke="#1c398e"
                        fill="#1c398e"
                        fillOpacity={0.2}
                    />
                    <text
                        x={"50%"}
                        y={20}
                        textAnchor="middle"
                        dominantBaseline="hanging"
                        className="text-xs font-bold"
                    >
                        Yesterday's Power Consumption Overview
                    </text>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExemplaryDayChart
