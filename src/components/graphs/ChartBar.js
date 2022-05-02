import { useState } from "react";

import "../css/ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  const [labelClass, setLabelClass] = useState('chart-bar__label deselected');

  const monthHandler = (event) => {
    var prefix = event.target.innerHTML;

    var monthNum = monthObj[prefix];

    console.log(event.target.innerHTML + " " + monthNum);

    //deselect a month
  if(props.monthSelected){
    setLabelClass('chart-bar__label deselected');
  } 
  //select month
  else{
    setLabelClass('chart-bar__label selected');
  }//endif 
  
  props.onSelectedMonth(monthNum);

  }//month handler


  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={labelClass} onClick={monthHandler}>{props.label}</div>
    </div>
  );
};

const monthObj = {
  "Jan": 0,
  "Feb": 1,
  "Mar": 2,
  "Apr": 3,
  "May": 4,
  "Jun": 5,
  "Jul": 6,
  "Aug": 7,
  "Sep": 8,
  "Oct": 9,
  "Nov": 10,
  "Dec": 11
};

export default ChartBar;
