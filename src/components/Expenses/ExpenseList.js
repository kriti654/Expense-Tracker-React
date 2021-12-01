import './ExpenseList.css'
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) =>{
    if(props.item.length === 0){
        return <h2 className = 'expenses-list__fallback'>NO EXPENSE FOUND</h2>;
    }

    return (
        <ul className = 'expenses-list'>
            {props.item.map( (newExpense) =>(
                <ExpenseItem 
                    key = {newExpense.id}
                    title= {newExpense.title}
                    date = {newExpense.date}
                    amt = {newExpense.amt}
                />
            ))}
        </ul>
    );
}

export default ExpenseList