import './ExpenseForm.css'

const ExpenseForm = () => {
    const formHandler = (event) => {
        event.preventDefault()
        const title = document.getElementById('expensetitleid').value;
        const amount = document.getElementById('expenseamountid').value;
        const date = document.getElementById('expensedateid').value;
        console.log(title, amount, date)
    }
    return (
        <div className='new-expense'>
            <form className="new-expense__controls" onChange={formHandler}>
                <div className="new-expense__controls">
                    <label>Expense Title</label>
                    <input id='expensetitleid' type="text" />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input id='expenseamountid' type="number" />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input id='expensedateid' type="Date" />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;