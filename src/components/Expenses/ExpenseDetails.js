import './Expenseitem.css'
import { useState } from 'react'

const ExpenseDetails = (props) => {
    const [price, setPrice] = useState(props.price)
    const priceHandler = () => {
        setPrice('$100')
    }
    return (
        <div className='expense-item__description'>
            <h2>{props.description}</h2>
            <h2>{props.location}</h2>
            <div className='expense-item__price'>{`$${price}`}</div>
            <button>Delete Expense</button>
            <button onClick={priceHandler}>Update Expense</button>
        </div>
    )
}

export default ExpenseDetails;