import {useState, useEffect} from 'react'
import Message from './Message'
import CloseIcon from '../img/cerrar.svg'

const Modal = ({setModal, modalAnimation, setModalAnimation, saveExpense, expenseEdit, setExpenseEdit}) => {

  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [id, setId] = useState('');


  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    if(Object.keys(expenseEdit).length > 0) {
      setName(expenseEdit.name.trim())
      setAmount(expenseEdit.amount)
      setCategory(expenseEdit.category)
      setDate(expenseEdit.date)
      setId(expenseEdit.id)
    }
  }, []);

  const AnimationModal = () => {

    setModalAnimation(false)
    setExpenseEdit({})
    setTimeout(() => {

      setModal(false)
    }, 500);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if([name, amount, category].includes('')) {
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 3000);

      return
    }

    saveExpense({name, amount, category, id, date})

  }

  return (
    <div className="modal">
      <div className='cerrar-modal'>
        <img
          src={CloseIcon}
          alt="Close Modal"
          onClick={AnimationModal}
        />
      </div>
      <form className={`formulario ${modalAnimation ? 'animar' : 'cerrar'}`} onSubmit={handleSubmit}>
        <legend>{expenseEdit.name ? 'Edit Expense' : 'New Expense'}</legend>

        {mensaje && <Message type="error">{mensaje}</Message>}

        <div className="campo">
          <label htmlFor='name'>Expense name</label>
          <input
            id='name'
            type="text"
            placeholder="Expense name"
            value={name.trim()}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor='name'>Expense Amount</label>
          <input
            id='amount'
            type="number"
            placeholder="Add amount"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor='name'>Category</label>

          <select
            id='category'
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="saving">Saving</option>
            <option value="house">House</option>
            <option value="food">Food</option>
            <option value="expenses">Expenses</option>
            <option value="entertaiment">Entertainment</option>
            <option value="health">Health</option>
            <option value="suscriptions">Suscriptions</option>
          </select>
        </div>

        <input
          type="submit"
          value={expenseEdit.name ? "Edit Expense" : "Add Expense"}
        />
      </form>
    </div>
  )
}

export default Modal
