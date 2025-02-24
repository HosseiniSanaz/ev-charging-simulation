import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import IChargingValuesProps from "./aggregated.type";
import ReportSectionHeader from 'components/ui/ReportSectionHeader';
import './index.css';
const AggregatedChart = ({ data }: IChargingValuesProps) => {
    return (
        <div className="flex flex-col gap-1">
            <ReportSectionHeader>Daily Charging Points Activity</ReportSectionHeader>

            <ResponsiveContainer width="100%" height={400} className="aggregated-chart">
                <LineChart data={data} width={400} height={400} margin={{ top: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {Object.keys(data[0] || {})
                        .filter(key => key !== 'time')
                        .map((key) => (
                            <Line
                                key={key}
                                type="monotone"
                                dataKey={key}
                                stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
                            />
                        ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AggregatedChart
