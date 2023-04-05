import { formatDate } from '../helpers'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import savingIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import expensesIcon from '../img/icono_gastos.svg'
import enterteimentIcon from '../img/icono_ocio.svg'
import healthIcon from '../img/icono_salud.svg'
import suscriptionIcon from '../img/icono_suscripciones.svg'

const IconDictionary = {
  'saving': savingIcon,
  'house': HouseIcon,
  'food': FoodIcon,
  'expenses': expensesIcon,
  'enterteiment': enterteimentIcon,
  'health': healthIcon,
  'suscriptions': suscriptionIcon
}

const Expense = ({expense, setExpenseEdit}) => {
  const { name, amount, date, category, id } = expense

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={ () => setExpenseEdit(expense) }>Edit</SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={ () => console.log('clicked') }>Eliminar</SwipeAction>
    </TrailingActions>
  )

  return (

    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
              src={IconDictionary[category]}
              alt="expense image"
            />
            <div className="descripcion-gasto">
              <p className="categoria">{category}</p>
              <p className="nombre-gasto">{name}</p>
              <p className="fecha-gasto">
                Added on: <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <div>
            <p className="cantidad-gasto">${amount}</p>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense
