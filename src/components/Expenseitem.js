import './Expenseitem.css'

function Expenseitem() {
    const expenseDate = new Date(2021, 3, 15)
    const expenseDescription = 'Car Insurance'
    const expenseAmount = '$294.67'
    const locationOfExpenditure = 'New York'
    return (
        <div className='expense-item'>
            <div> {expenseDate.toISOString()} </div>
            <div className='expense-item__description'>
                <h2>{expenseDescription}</h2>
                <h2>{locationOfExpenditure}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
        </div>
    )
}

export default Expenseitem