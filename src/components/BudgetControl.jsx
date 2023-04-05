import {useState, useEffect} from 'react'

const BudgetControl = ({budget, expenses}) => {

  const [remaining, setRemaining] = useState(0)
  const [expensed, setExpensed] = useState(0)

  useEffect(() => {
    const totalExpensed = expenses.reduce((total, expense) => total + expense.amount, 0)
    const totalRemaining = budget - totalExpensed

    setExpensed(totalExpensed)
    setRemaining(totalRemaining)
  }, [expenses])

  const MoneyFormat = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div>
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
          <p>Grafica</p>
        </div>

        <div className="contenido-presupuesto">
          <p>
            <span>Budget: </span> {MoneyFormat(budget)}
          </p>

          <p>
            <span>Remaining: </span> {MoneyFormat(remaining)}
          </p>

          <p>
            <span>Expensed: </span> {MoneyFormat(expensed)}
          </p>

        </div>
      </div>
    </div>
  )
}

export default BudgetControl
