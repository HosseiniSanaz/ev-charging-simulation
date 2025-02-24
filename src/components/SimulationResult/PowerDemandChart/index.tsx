import {useState} from "react";
import {ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar} from "recharts";
import PowerDemandFilter from "./Filters";
import IPowerDemandChartProps from "./power-demand.type";
import {ViewType} from "./filter-type";
import ReportSectionHeader from "components/ui/ReportSectionHeader";

const PowerDemandChart = ({data}: IPowerDemandChartProps) => {
    const [view, setView] = useState<ViewType>(ViewType.Hourly);
    const xAxisKey = view === ViewType.Hourly ? 'hour' : view === ViewType.Daily ? 'day' : view === ViewType.Weekly ? 'week' : 'month';
    const barKey = 'power';

    return (
        <div className="flex flex-col gap-1">
            <ReportSectionHeader>Power Demand Chart</ReportSectionHeader>
            <PowerDemandFilter view={view} setView={setView}/>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data[view]}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey={xAxisKey}/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey={barKey} fill="#1c398e"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};


export default PowerDemandChart
