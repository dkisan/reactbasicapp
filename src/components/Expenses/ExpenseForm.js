import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })
    const titleHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            }
        })
    }
    const amountHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        })
    }
    const dateHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        })
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