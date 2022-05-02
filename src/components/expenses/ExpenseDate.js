import "../css/ExpenseDate.css";

//Date card for each expense
function ExpenseDate(props) {
  //Extract date from props
  var month = getTrueMonth(props.date.getUTCMonth());
  var day = props.date.getUTCDate();
  var year = props.date.getFullYear();

  return (
    //return date component
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

//TODO:
//Wasted space here, clean up later
const monthObj = {
  "January": 31,
  "February": 28,
  "March": 31,
  "April": 30,
  "May": 31,
  "June": 30,
  "July": 31,
  "August": 31,
  "September": 30,
  "October": 31,
  "November": 30,
  "December": 31,
};

//My own function because date objects are weird
const getTrueMonth = (month) => {
  return Object.keys(monthObj)[month];
};

export default ExpenseDate;
