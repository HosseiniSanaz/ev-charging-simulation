import Header from "./Header"

function TotalEnergyCharged({value}: { value: number }) {
    return (
        <div className="flex flex-col gap-1">
            <Header>Total Energy Charged</Header>
            <p className="text-3xl font-bold text-blue-950">{value.toFixed(2)} kWh</p>
        </div>
    )
}

export default TotalEnergyCharged
