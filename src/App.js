import Card from "./components/Ui/Card";
import Expenseitem from "./components/Expenses/Expenseitem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import { useState } from "react";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";

const App = () => {
  const [filteredyear, setFilteredYear] = useState('2020')
  const [expenses, setExpenses] = useState([
    {
      id: '1',
      expenseDate: new Date(2021, 3, 15),
      expenseDescription: 'Car Insurance',
      expenseAmount: '$294.67',
      locationOfExpenditure: 'New York'
    },
    {
      id: '2',
      expenseDate: new Date(2022, 3, 15),
      expenseDescription: 'Bike Insurance',
      expenseAmount: '$94.67',
      locationOfExpenditure: 'Korea'
    },
    {
      id: '3',
      expenseDate: new Date(2021, 1, 15),
      expenseDescription: 'Home Insurance',
      expenseAmount: '$2994.67',
      locationOfExpenditure: 'Japan'
    },
    {
      id: '4',
      expenseDate: new Date(2020, 3, 15),
      expenseDescription: 'Land Insurance',
      expenseAmount: '$29594.67',
      locationOfExpenditure: 'Australia'
    }
  ])
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState,
      {
        expenseDate: new Date(expense.enteredDate),
        expenseDescription: expense.enteredTitle,
        expenseAmount: '$' + expense.enteredAmount,
        locationOfExpenditure: 'Australia',
        id: Math.random().toString()
      }]
    })
  }

  const filterchangehandler = (selectedyear) => {
    setFilteredYear(selectedyear)
  }

  const filteredExpense = expenses.filter(e=>{
    return e.expenseDate.getFullYear().toString() === filteredyear
  })

  return (
    <Card>
      <h2>Expense Item</h2>
      <ExpenseForm addExpenseHandler={addExpenseHandler} />
      <Card className='expenses'>
        <ExpenseFilter selected={filteredyear} onChangeFilter={filterchangehandler} />
        {filteredExpense.map(exp => {
          return <Expenseitem expense={exp} key={exp.id}/>
        })}
      </Card>
    </Card>
  );
}

export default App;
