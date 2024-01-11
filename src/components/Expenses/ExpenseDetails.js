import './Expenseitem.css'

const ExpenseDetails = (props) => {
    return (
        <div className='expense-item__description'>
            <h2>{props.description}</h2>
            <h2>{props.location}</h2>
            <div className='expense-item__price'>{props.price}</div>
        </div>
    )
}

export default ExpenseDetails;