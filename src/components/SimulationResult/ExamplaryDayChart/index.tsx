import {ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line} from "recharts";
import IExamplaryDayChartProps from "./examplary-day.type"
import ReportSectionHeader from "components/ui/ReportSectionHeader";

const ExemplaryDayChart = ({data}: IExamplaryDayChartProps) => {
    return (
        <div className="flex flex-col gap-1">
            <ReportSectionHeader>Exemplary Day Chart</ReportSectionHeader>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{top: 50}}>

                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="time"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="power" stroke="#1c398e"/>
                    <text
                        x={"50%"}
                        y={20}
                        textAnchor="middle"
                        dominantBaseline="hanging"
                    >
                        Yesterday's Power Consumption Overview
                    </text>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExemplaryDayChart
