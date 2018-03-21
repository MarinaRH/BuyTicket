import React from 'react';
import {connect} from 'react-redux'

const Platea = ({data, seleccionarSeccion}) => {
  data = data[4].types
  return (
    <ul className="Platea">
      {
        data.map((element, index) =>
          <li className="List-platea" key={index} onClick={()=> seleccionarSeccion(element)}>
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
      dispatch({type: 'SELECCIONAR_SECCION',seccion})
    }
  })
)(Platea)