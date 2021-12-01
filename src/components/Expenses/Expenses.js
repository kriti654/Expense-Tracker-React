import React, { useState } from 'react';

import Cards from '../UI/Cards';
import './Expenses.css'
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpenseChart';
import ExpenseList from './ExpenseList';

const Expenses = (props) =>{
    const [selectedYear, setSelectedYear] = useState('2021')

    const filterYearHandler =(filteredYear) =>{
        setSelectedYear(filteredYear)
    }

    const filteredYear = props.data.filter( expenses=>{
        return expenses.date.getFullYear().toString() === selectedYear
    })

    return(
        <Cards className= 'expenses'>
            <ExpenseFilter selected= {selectedYear} onFilter ={filterYearHandler} />
            <ExpensesChart expenses={filteredYear} />
            <ExpenseList item= {filteredYear} />
        </Cards>
    );
}

export default Expenses;