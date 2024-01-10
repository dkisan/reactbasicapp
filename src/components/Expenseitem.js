import './Expenseitem.css'

function Expenseitem(props) {
    return (
        <div className='expense-item'>
            <div> {props.expense.expenseDate.toISOString()} </div>
            <div className='expense-item__description'>
                <h2>{props.expense.expenseDescription}</h2>
                <h2>{props.expense.locationOfExpenditure}</h2>
                <div className='expense-item__price'>{props.expense.expenseAmount}</div>
            </div>
        </div>
    )
}

export default Expenseitem