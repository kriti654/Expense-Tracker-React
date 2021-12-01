import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    // eslint-disable-next-line
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);
    }

    const amtChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event)=>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expense= {
            title: enteredTitle,
            amt: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveHandler(expense);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit = {submitHandler}>
            <div className ='new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input 
                        type= 'text' 
                        value={enteredTitle} 
                        onChange= {titleChangeHandler}
                    />
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type= 'number' 
                        min= '0.01' 
                        step='0.01' 
                        value={enteredAmount} 
                        onChange= {amtChangeHandler} 
                    />
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input 
                        type= 'date' 
                        min= '2021-08-01' 
                        max='2027-01-01'
                        value={enteredDate} 
                        onChange= {dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick= {props.onCancel}>Cancel</button>
                <button type= 'submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;