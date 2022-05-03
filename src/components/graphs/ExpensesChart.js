import Chart from "./Chart";

const ExpensesChart = (props) => {

  // init value
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // sum up expenses for all months
  for (const expense of props.expenses) {
    const month = expense.date.getMonth(); //jan === 0
    chartDataPoints[month].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} currentlySelectedMonths={props.currentlySelectedMonths} onSelectMonth={props.onSelectMonth}/>;
};

export default ExpensesChart;
