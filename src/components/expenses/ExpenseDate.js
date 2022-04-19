import '../css/ExpenseDate.css';

//Date card for each expense
function ExpenseDate(props){
    
    //Extract date from props
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return(
        
    //return date component
    <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">{year}</div>
          <div className="expense-date__day">{day}</div>
      </div>
    );
}

export default ExpenseDate;