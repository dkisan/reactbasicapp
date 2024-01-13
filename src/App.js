import Card from "./components/Ui/Card";
import Expenseitem from "./components/Expenses/Expenseitem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import { useState } from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const App = () => {
  const [filteredyear, setFilteredYear] = useState('2020')
  const [expenses, setExpenses] = useState([
    {
      id: '1',
      expenseDate: new Date(2021, 3, 15),
      expenseDescription: 'Car Insurance',
      expenseAmount: '294.67',
      locationOfExpenditure: 'New York'
    },
    {
      id: '2',
      expenseDate: new Date(2022, 3, 15),
      expenseDescription: 'Bike Insurance',
      expenseAmount: '94.67',
      locationOfExpenditure: 'Korea'
    },
    {
      id: '3',
      expenseDate: new Date(2021, 1, 15),
      expenseDescription: 'Home Insurance',
      expenseAmount: '2994.67',
      locationOfExpenditure: 'Japan'
    },
    {
      id: '4',
      expenseDate: new Date(2020, 3, 15),
      expenseDescription: 'Land Insurance',
      expenseAmount: '29594.67',
      locationOfExpenditure: 'Australia'
    }
  ])
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState,
      {
        expenseDate: new Date(expense.enteredDate),
        expenseDescription: expense.enteredTitle,
        expenseAmount: expense.enteredAmount,
        locationOfExpenditure: 'Australia',
        id: Math.random().toString()
      }]
    })
  }

  const filterchangehandler = (selectedyear) => {
    setFilteredYear(selectedyear)
  }

  const filteredExpense = expenses.filter(e => {
    return e.expenseDate.getFullYear().toString() === filteredyear
  })

  const [isForm, setIsForm] = useState(false)
  const formVisibleHandler = () => {
    setIsForm((formstate) => {
      return true
    })
  }
  const formHideHandler = () => {
    setIsForm((formstate) => {
      return false
    })
  }

  return (
    <Card>
      <h2>Expense Item</h2>
      {!isForm &&
        <div className='new-expense'>
          <button onClick={formVisibleHandler}>Add Expense</button>
        </div>
      }
      {isForm && <ExpenseForm addExpenseHandler={addExpenseHandler} formHideHandler={formHideHandler} />}
      <Card className='expenses'>
        <ExpenseFilter selected={filteredyear} onChangeFilter={filterchangehandler} />
        <ExpensesChart expenses={filteredExpense} />
        {filteredExpense.length === 0 && <p>No expenses</p>}
        {filteredExpense.length === 1 && <p>Please Add More Expenses</p>}
        {filteredExpense.length > 0 && filteredExpense.map(exp => {
          return <Expenseitem expense={exp} key={exp.id} />
        })}
      </Card>
    </Card>
  );
}

export default App;
