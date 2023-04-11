import {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({budget, setBudget, expenses, setExpenses, setIsValidBudget}) => {

  const [remaining, setRemaining] = useState(0)
  const [expensed, setExpensed] = useState(0)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const totalExpensed = expenses.reduce((total, expense) => total + expense.amount, 0)
    const totalRemaining = budget - totalExpensed

    const newPercentage = (((budget - totalRemaining) / budget) * 100).toFixed(2)

    setExpensed(totalExpensed)
    setRemaining(totalRemaining)

    setTimeout(() => {

      setPercentage(newPercentage)
    }, 1000);

  }, [expenses])

  const MoneyFormat = (amount) => {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const handleResetApp = () => {
    const resetBudget = confirm('Are you sure you want to reset the budget?')

    if(resetBudget){

      setExpenses([])
      setBudget(0)
      setIsValidBudget(false)
    }
  }

  return (
    <div>
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
          <CircularProgressbar
            styles={buildStyles({
              pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
              trailColor: '#F5F5F5',
              textColor: percentage > 100 ? '#DC2626' : '#3B82F6',
            })}
            value={percentage}
            text={`${percentage}% Expensed`}
          />
        </div>

        <div className="contenido-presupuesto">

          <button className='reset-app'
            type='button'
            onClick={handleResetApp}
          >
            Reset Budget
          </button>

          <p>
            <span>Budget: </span> {MoneyFormat(budget)}
          </p>

          <p className={`${remaining < 0 ? 'negativo' : ''}` }>
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
