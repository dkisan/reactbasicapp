import './Expenseitem.css'

const ExpenseDetails = (props) => {
    return (
        <div className='expense-item__description'>
            <h2>{props.description}</h2>
            <h2>{props.location}</h2>
            <div className='expense-item__price'>{props.price}</div>
            <button>Delete Expense</button>
        </div>
    )
}

export default ExpenseDetails;