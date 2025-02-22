import Button from "components/ui/button";
import IFilterType, {ViewType} from "./filter-type";

const PowerDemandFilter = ({view, setView}: IFilterType) => {
    const periods = Object.values(ViewType);

    return (
        <div className="flex justify-center space-x-2 md:space-x-3 mb-2">
            {periods.map((period) => (
                <Button
                    key={period}
                    size="small"
                    onClick={() => setView(period)}
                    variant={view === period ? 'primary' : 'muted'}
                >
                    {period}
                </Button>
            ))}
        </div>
    );
};

export default PowerDemandFilter
