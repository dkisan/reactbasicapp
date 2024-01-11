import Card from '../Ui/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import './Expenseitem.css'

const Expenseitem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expense.expenseDate} />
            <ExpenseDetails description={props.expense.expenseDescription} location={props.expense.locationOfExpenditure} price={props.expense.expenseAmount} />
        </Card>
    )
}

export default Expenseitem