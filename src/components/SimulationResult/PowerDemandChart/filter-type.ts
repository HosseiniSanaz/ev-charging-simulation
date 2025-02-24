export enum ViewType {
    Hourly = 'hourly',
    Daily = 'daily',
    Weekly = 'weekly',
    Monthly = 'monthly'
}

interface IFilterType {
    view: ViewType
    setView: (view: ViewType) => void
}

export default IFilterType