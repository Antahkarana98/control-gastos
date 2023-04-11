import Expense from './Expense'

const ExpensesList = ({expenses, setExpenseEdit, expenseDelete}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{expenses.length ? "Expenses" : "Add new expense"}</h2>

        {expenses.map(expense => (
          <Expense
            key = {expense.id}
            expense = {expense}
            setExpenseEdit = {setExpenseEdit}
            expenseDelete = {expenseDelete}
          />
        ))}
    </div>
  )
}

export default ExpensesList
