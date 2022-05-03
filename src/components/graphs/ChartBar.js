import { useState } from "react";

import "../css/ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  const [labelClass, setLabelClass] = useState("chart-bar__label");

  const selectHandler = (event) => {
    var prefix = event.target.innerHTML;
    var monthNum = monthObj[prefix];

    //deselect
    if (props.currentlySelectedMonths.includes(monthNum)) {
      setLabelClass("chart-bar__label");
    }
    //select
    else {
      setLabelClass("chart-bar__label selected");
    }
    props.onSelectMonth(monthNum);
  }; //select handler

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={labelClass} onClick={selectHandler}>
        {props.label}
      </div>
    </div>
  );
};

const monthObj = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export default ChartBar;
