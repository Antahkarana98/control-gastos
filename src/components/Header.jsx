import BudgetControl from "./BudgetControl"
import NewBudget from "./NewBudget"


const Header = ({budget, setBudget, expenses, setExpenses, isValidBudget, setIsValidBudget}) => {
  return (

    <header>
      <h1>Expense planner</h1>
      {isValidBudget ? (
        <BudgetControl
          budget = {budget}
          setBudget = {setBudget}
          expenses = {expenses}
          setExpenses = {setExpenses}
          setIsValidBudget = {setIsValidBudget}
        />

      ) : (
          <NewBudget
            budget = {budget}
            setBudget = {setBudget}
            setIsValidBudget = {setIsValidBudget}
          />
        )}
    </header>
  )
}

export default Header
