import {useState, useEffect} from 'react'

const Filter = ({filter, setFilter}) => {

  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
          <label>Expenses Filter</label>
          <select
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="">-- All Categories --</option>
            <option value="saving">Saving</option>
            <option value="house">House</option>
            <option value="food">Food</option>
            <option value="expenses">Expenses</option>
            <option value="entertaiment">Entertainment</option>
            <option value="health">Health</option>
            <option value="suscriptions">Suscriptions</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filter
