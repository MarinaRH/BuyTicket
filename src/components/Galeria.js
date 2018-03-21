import React from 'react'
import {connect} from 'react-redux'

const Galeria = ({ data, seleccionarSeccion}) => {
  data = data[1].types
  return (
    <ul className="Galeria">
      {
        data.map((element, index) =>
          <li className="List-Galeria" key={index} onClick={()=> seleccionarSeccion(element)}>
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
)(Galeria)