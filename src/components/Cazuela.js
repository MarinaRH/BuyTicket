import React from 'react';
import { connect } from 'react-redux';


const Cazuela = ({ data, seleccionarSeccion, navigateTo }) => {
  data = data.cazuela
  return (

    <g >
      <path d="M150 5 L190 5 L160 70 L120 70 Z" className="buts" fill="#A4C354" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M195 5 L305 5 L335 70 L165 70 Z" className="buts" fill="#A4C354" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M310 5 L350 5 L380 70 L340 70 Z" className="buts" fill="#A4C354" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M5 95 L120 80 L170 80 L180 105 L120 105 L5 130 Z" className="buts" fill="#A4C354" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M175 80 L325 80 L315 105 L185 105 Z" className="buts" fill="#A4C354" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M495 95 L380 80 L330 80 L320 105 L380 105 L495 130 Z" className="buts" fill="#A4C354" onClick={() => { navigateTo('pagina-3') }}></path>
    </g>
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
