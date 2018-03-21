import React from 'react';
import {connect} from 'react-redux'
import SelectSeat from './SelectSeat';

const Cazuela = ({ data, seleccionarSeccion }) => {
  data = data[0].types
  console.log(data)
  return (
    <ul className="Cazuela">
      {
        data.map((element, index) =>
          <li className="List-Cazuela" key={index} onClick={()=> seleccionarSeccion(element)}>
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
)(Cazuela)