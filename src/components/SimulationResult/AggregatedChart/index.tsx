import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import IChargingValuesProps from "./aggregated.type";
import ReportSectionHeader from 'components/ui/ReportSectionHeader';

const AggregatedChart = ({data}: IChargingValuesProps) => {
    return (
        <div className="flex flex-col gap-1">
            <ReportSectionHeader>Daily Charging Points Activity</ReportSectionHeader>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="time"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
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
