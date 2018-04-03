import React from 'react';
import { connect } from 'react-redux'

const PalcosAltos = ({ data, seleccionarSeccion, navigateTo }) => {
  data = data.palcosAltos
  return (
    <ul className="PalcosAltos">
      {
        data.map((element, index) =>
          <li className="List-PalcosAlto" key={index} onClick={() => { seleccionarSeccion(element), navigateTo('pagina-3') }}>
            {element.name}
          </li>
        )
      }
    </ul>)
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    seleccionarSeccion(seccion) {
      dispatch({ type: 'SELECCIONAR_SECCION', seccion })
    },
    navigateTo: (pagina) => {
      dispatch({
        type: 'NAVIGATE_TO',
        pagina
      })
    }
  })
)(PalcosAltos)