import "../css/ExpenseDate.css";

//Date card for each expense
function ExpenseDate(props) {
  //Extract date from props
  const month = getTrueMonth(props.date.getUTCMonth());
  const day = props.date.getUTCDate();
  const year = props.date.getFullYear();

  return (
    //return date component
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

//My own function because date objects are weird
const getTrueMonth = (month) => {
    switch (month) {
        case 0:
            month = "January";
          break;
        case 1:
            month = "February";
          break;
        case 2:
            month = "March";
          break;
        case 3:
            month = "April";
          break;
        case 4:
            month = "May";
          break;
        case 5:
            month = "June";
          break;
        case 6:
            month = "July";
          break;
        case 7:
            month = "August";
          break;
        case 8:
            month = "September";
          break;
        case 9:
            month = "October";
          break;
        case 10:
            month = "November";
          break;
        case 11:
            month = "December";
          break;
      }
      return month;
};

export default ExpenseDate;
