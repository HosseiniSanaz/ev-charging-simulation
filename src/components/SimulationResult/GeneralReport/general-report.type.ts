import IResultProps from "../result.type"

type IGeneralReportProps = Pick<IResultProps, 'peakPower' | 'totalChargingEvents'>

export default IGeneralReportProps