import { useState } from 'react'
import Message from './Message'

const NewBudget = ({budget, setBudget, setIsValidBudget}) => {

  const [message, setMessage] = useState('')

  const handleBudget = e => {
    e.preventDefault()
    if (!budget || budget < 0) {
      setMessage('Invalid Budget')
      return
    }
    setMessage('')
    setIsValidBudget(true)

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label>What`s your Budget</label>

          <input

            className="nuevo-presupuesto"
            type="text"
            placeholder="Budget"
            value={budget}
            onChange={e => setBudget(Number(e.target.value))}
          />

          <input
          type="submit"
          value="Define Budget"
          />
        </div>

        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  )
}

export default NewBudget
