import Card from "./components/Card";
import Expenseitem from "./components/Expenseitem";

function App() {
  const expenses = [
    {
      expenseDate: new Date(2021, 3, 15),
      expenseDescription: 'Car Insurance',
      expenseAmount: '$294.67',
      locationOfExpenditure: 'New York'
    },
    {
      expenseDate: new Date(2022, 3, 15),
      expenseDescription: 'Bike Insurance',
      expenseAmount: '$94.67',
      locationOfExpenditure: 'Korea'
    },
    {
      expenseDate: new Date(2021, 1, 15),
      expenseDescription: 'Home Insurance',
      expenseAmount: '$2994.67',
      locationOfExpenditure: 'Japan'
    },
    {
      expenseDate: new Date(2023, 3, 15),
      expenseDescription: 'Land Insurance',
      expenseAmount: '$29594.67',
      locationOfExpenditure: 'Australia'
    }
  ]
  return (
    <Card>
      <h2>Expense Item</h2>
      <Card className='expenses'>
        {expenses.map(exp => {
          return <Expenseitem expense={exp} />
        })}
      </Card>
    </Card>
  );
}

export default App;
