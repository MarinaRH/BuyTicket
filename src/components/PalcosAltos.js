import React from 'react';
import {connect} from 'react-redux'

const PalcosAltos = ({data, seleccionarSeccion}) => {
  data = data[2].types
  return (
    <ul className="PalcosAltos">
      {
        data.map((element, index) =>
          <li className="List-PalcosAlto" key={index} onClick={()=> seleccionarSeccion(element)}>
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
      dispatch({type: 'SELECCIONAR_SECCION',seccion})
    }
  })
)(PalcosAltos)