import { useState, useEffect } from 'react'
import Header from './components/Header'

import Modal from './components/Modal'
import { generateId } from './helpers'
import NewExpenseIcon from './img/nuevo-gasto.svg'
import ExpensesList from './components/ExpensesList'
import Filter from './components/Filter'

function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
    )
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  )

  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false)
  const [expenseEdit, setExpenseEdit] = useState({})
  const [filter, setFilter] = useState('')
  const [expensesFilter, setExpensesFilter] = useState([])

  useEffect(() => {
    if(Object.keys(expenseEdit).length > 0) {
      setModal(true)

      setTimeout(() => {
      setModalAnimation(true)
    }, 500);
    }
  }, [expenseEdit]);

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget]);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses]);

  useEffect(() => {
    const budgetLs = localStorage.getItem('budget') ?? 0

    if(budgetLs > 0) {
      setIsValidBudget(true)
    }
  }, []);

  useEffect(() => {
    if(filter){
      const expensesFilter = expenses.filter(expense => expense.category === filter)
      setExpensesFilter(expensesFilter)
    }
  }, [filter])

  const handleNewExpense = () => {
    setModal(true)
    setExpenseEdit({})

    setTimeout(() => {
      setModalAnimation(true)
    }, 500);
  }

  const saveExpense = expense => {

    if(expense.id){
      const EditedExpenses = expenses.map(expenseState => (
        expenseState.id === expense.id ? expense : expenseState))

      setExpenses(EditedExpenses)
      setExpenseEdit({})
    }else{

      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([ ...expenses, expense ])
    }

    setModalAnimation(false)
    setTimeout(() => {

      setModal(false)
    }, 500);
  }

  const expenseDelete = id => {
    const deleteExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(deleteExpenses)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses = {expenses}
        setExpenses = {setExpenses}
        budget = {budget}
        setBudget = {setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
      />

      {isValidBudget && (

        <>
          <main>
            <Filter
              filter = {filter}
              setFilter = {setFilter}
            />
            <ExpensesList
              expenses = {expenses}
              setExpenseEdit = {setExpenseEdit}
              expenseDelete = {expenseDelete}
              filter={filter}
              expensesFilter={expensesFilter}
            />
          </main>

          <div className="nuevo-gasto">
            <img src={NewExpenseIcon}
            alt="Nuevo Gasto"
            onClick={handleNewExpense}
            />

          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal = {setModal}
          modalAnimation = {modalAnimation}
          setModalAnimation = {setModalAnimation}
          saveExpense = {saveExpense}
          expenseEdit = {expenseEdit}
          setExpenseEdit = {setExpenseEdit}
        />
      )}
    </div>
  )
}

export default App
