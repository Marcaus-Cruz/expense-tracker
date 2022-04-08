import "../css/Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //returns new array with all dataPoint values as indices
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  //finds max of all 12 datapoint values
  const maxVal = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={maxVal}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
