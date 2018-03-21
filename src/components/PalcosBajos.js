import React from 'react';
import {connect} from 'react-redux'

const PalcosBajos = ({data, seleccionarSeccion}) => {
  data = data[3].types
  return (
    <ul className="PalcosBajos">
      {
        data.map((element, index) =>
          <li className="List-PalcoBajo" key={index} onClick={()=> seleccionarSeccion(element)}>
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
)(PalcosBajos)