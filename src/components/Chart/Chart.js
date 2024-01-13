import './Chart.css'
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValue)
    return (
        <div className='chart'>
            {props.dataPoints.map(datapoint => {
                return <ChartBar value={datapoint.value} maxValue = {totalMax} label={datapoint.label} key={datapoint.label} />
            })}
        </div>
    )
}

export default Chart;