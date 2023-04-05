const BudgetControl = ({budget}) => {

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
            <span>Presupuesto: </span> {MoneyFormat(budget)}
          </p>

          <p>
            <span>Disponible: </span> {MoneyFormat(budget)}
          </p>

          <p>
            <span>Gastado: </span> {MoneyFormat(budget)}
          </p>

        </div>
      </div>
    </div>
  )
}

export default BudgetControl
