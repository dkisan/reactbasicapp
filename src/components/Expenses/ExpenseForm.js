import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredamount, setEnteredAmount] = useState('')
    const [entereddate, setEnteredDate] = useState('')
    console.log(enteredTitle, enteredamount, entereddate)
    const titleHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateHandler = (event) => {
        setEnteredDate(event.target.value)
    }
    return (
        <div className='new-expense'>
            <form className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Expense Title</label>
                    <input id='expensetitleid' type="text" onChange={titleHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input id='expenseamountid' type="number" onChange={amountHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input id='expensedateid' type="Date" onChange={dateHandler} />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;