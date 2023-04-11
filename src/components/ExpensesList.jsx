import Expense from './Expense'

const ExpensesList = ({expenses, setExpenseEdit, expenseDelete, filter, expensesFilter}) => {
  return (
    <div className="listado-gastos contenedor">

    {
      filter ? (
        <>
          <h2>{expensesFilter.length ? "Expenses" : "Add new expense"}</h2>
          {expensesFilter.map(expense => (
            <Expense
              key = {expense.id}
              expense = {expense}
              setExpenseEdit = {setExpenseEdit}
              expenseDelete = {expenseDelete}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{expenses.length ? "Expenses" : "Add new expense"}</h2>

          {expenses.map(expense => (
            <Expense
              key = {expense.id}
              expense = {expense}
              setExpenseEdit = {setExpenseEdit}
              expenseDelete = {expenseDelete}
            />
          ))}
        </>
      )
    }
    </div>
  )
}

export default ExpensesList
