import ExpenseForm from './ExpenseForm';

import '../css/NewExpense.css';

const NewExpense = (props) => {

    const storeExpenseHandler = (enteredExpense) => {
        const expense = {
            ...enteredExpense,
            // Placeholder for now --> will not need this once db is connected
            id: Math.random.toString()
        };
        
        //send to App.js
        props.onGetExpense(expense);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onStoreExpense={storeExpenseHandler}/>
        </div>
    );
};

export default NewExpense;