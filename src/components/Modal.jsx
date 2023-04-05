import CloseIcon from '../img/cerrar.svg'

const Modal = ({setModal, modalAnimation, setModalAnimation}) => {

  const AnimationModal = () => {

    setModalAnimation(false)
    setTimeout(() => {

      setModal(false)
    }, 500);
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
      <form className={`formulario ${modalAnimation ? 'animar' : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor='name'>Expense name</label>
          <input
            id='name'
            type="text"
            placeholder="Expense name"
          />
        </div>

        <div className="campo">
          <label htmlFor='name'>Expense Amount</label>
          <input
            id='amount'
            type="number"
            placeholder="Add amount"
          />
        </div>

        <div className="campo">
          <label htmlFor='name'>Category</label>

          <select id='category'>
            <option value="">-- Select --</option>
            <option value="saving">Saving</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="health">Health</option>
            <option value="entertainment">Entertainment</option>
            <option value="others">Others</option>
          </select>
        </div>
        
        <input
          type="submit"
          value="Add Expense"
        />
      </form>
    </div>
  )
}

export default Modal
