import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) =>{
    const [isEditing, setIsEditng] = useState(false)

    const saveHandler = (enteredExpenseData)=>{
        const newExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(newExpenseData);

        setIsEditng(false);
    }

    const startEditingHandler =() =>{
        setIsEditng(true);
    }

    const stopEditingHandler =() =>{
        setIsEditng(false);
    }

    return(
        <div className= 'new-expense'>
            {!isEditing && <button onClick ={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm  onSaveHandler= {saveHandler} onCancel ={stopEditingHandler}/>}
        </div>
    );
}

export default NewExpense