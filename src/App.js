import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const data =[
  {
    title: 'Car Insurance',
    amt: 90,
    date: new Date(2021, 2,28),
  },
  {
    title: 'Books',
    amt: 200, 
    date: new Date(2021, 2,12),
  },
  {
    title: 'Dresses',
    amt: 2900,
    date: new Date(2021, 1,28),
  },
];

const App = ()=> {
  const [expenseList, setExpenseList] = useState(data);

  const addExpenseHandler =(expense) =>{
    setExpenseList((prevExpenses) =>{
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses data= {expenseList}/>
    </div>
  );
}

export default App;
