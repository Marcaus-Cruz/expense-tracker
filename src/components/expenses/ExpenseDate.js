import "../css/ExpenseDate.css";

//Date card for each expense
function ExpenseDate(props) {
  //Extract date from props
  var month = getTrueMonth(props.date.getUTCMonth());
  var day = props.date.getUTCDate();
  var year = props.date.getFullYear();

  var maxDays = numDays(month);

  const monthHandler = (event) => {
    //props.onGetYear(event.target.value);
    maxDays = numDays(getTrueMonth(event.target.value));
    console.log(maxDays);
    console.log(event.target.value);
    month=(event.target.value)
  };

  const yearHandler = (event) => {
    //props.onGetYear(event.target.value);
  };

  const dayHandler = (event) => {
    //props.onGetYear(event.target.value);
    //check selected month
  };

  if (props.removing) {
     
    // console.log(theDays);
    // console.log([...theDays]);
    return (
      <div className="expense-date">
        <select value={month} onChange={monthHandler}>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
        <select value={year} onChange={yearHandler}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
          <option value="2028">2028</option>
          <option value="2029">2029</option>
          <option value="2030">2030</option>
        </select>
        <input
          type="number"
          value={day}
          min="1"
          step="1"
          max={maxDays}
          onChange={dayHandler}
        />
      </div>
    );
  }
  return (
    //return date component
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

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

const numDays = (month) => {
  return monthObj[month];
};

export default ExpenseDate;
