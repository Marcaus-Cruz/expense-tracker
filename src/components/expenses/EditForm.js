// import { useState } from "react";

// const EditForm = (props) => {
//   //Title event listener
//   const [enteredTitle, setEnteredTitle] = useState(props.title);
//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   };

//   //Amount event listener
//   const [enteredAmount, setEnteredAmount] = useState(props.amount);
//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//   };

//   //Date event listener
//   const [enteredDate, setEnteredDate] = useState(props.date);
//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
    
//   }

//   return (
//     <form onSubmit={submitHandler}>
//       <div>
//         <label>Date</label>
//         <input
//           type="date"
//           value={enteredDate}
//           min="2020-01-01"
//           max="2030-12-31"
//           onChange={dateChangeHandler}
//         />
//       </div>
//       <div>
//         <label>Name </label>
//         <input
//           placeholder={props.enteredTitle}
//           type="text"
//           value={enteredTitle}
//           onChange={titleChangeHandler}
//         />
//       </div>
//       <div>
//         <input
//           type="number"
//           value={enteredAmount}
//           min=".01"
//           step=".01"
//           placeholder="0.00"
//           onChange={amountChangeHandler}
//         />
//       </div>
//       <button type='submit'>save</button>
//     </form>
//   );
// };

// export default EditForm;
