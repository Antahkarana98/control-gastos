import { useState, useEffect } from 'react'
import Header from './components/Header'

import Modal from './components/Modal'
import { generateId } from './helpers'
import NewExpenseIcon from './img/nuevo-gasto.svg'
import ExpensesList from './components/ExpensesList'

function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [expenseEdit, setExpenseEdit] = useState({})

  useEffect(() => {
    if(Object.keys(expenseEdit).length > 0) {
      setModal(true)

      setTimeout(() => {
      setModalAnimation(true)
    }, 500);
    }
  }, [expenseEdit]);

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

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        expenses = {expenses}
        budget = {budget}
        setBudget = {setBudget}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}
      />

      {isValidBudget && (

        <>
          <main>
            <ExpensesList
              expenses = {expenses}
              setExpenseEdit = {setExpenseEdit}
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
        />
      )}
    </div>
  )
}

export default App
