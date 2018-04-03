import React from 'react';
import { connect } from 'react-redux';

const Cazuela = ({ data, seleccionarSeccion, navigateTo }) => {
  data = data.cazuela
  return (
    <ul className="Cazuela">
      {
        data.map((element, index) =>
          <li className="List-Cazuela" key={index} onClick={() => { seleccionarSeccion(element), navigateTo('pagina-3') }}>
            {element.name}

          </li>
        )
      }
    </ul>
  )

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
)(Cazuela)