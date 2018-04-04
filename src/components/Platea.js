import React from 'react';
import { connect } from 'react-redux'

const Platea = ({ data, seleccionarSeccion, navigateTo }) => {
  data = data.platea
  return (
    <g>
      <path d="M110 260 L180 260 L140 320 L60 320" fill="#1955A2" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M185 260 L315 260 L355 320 L145 320" fill="#1955A2" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M390 260 L320 260 L360 320 L440 320" fill="#1955A2" onClick={() => { navigateTo('pagina-3') }}></path>

      <path d="M60 325 L140 325 L110 370 L20 370" fill="#1955A2" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M145 325 L355 325 L385 370 L115 370" fill="#1955A2" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M440 325 L360 325 L390 370 L480 370" fill="#1955A2" onClick={() => { navigateTo('pagina-3') }}></path>

    </g>
    // <ul className="Platea">
    //   {
    //     data.map((element, index) =>
    //       <li className="List-platea" key={index} onClick={()=> {seleccionarSeccion(element),navigateTo('pagina-3')}}>
    //         {element.name}
    //       </li>
    //     )
    //   }
    // </ul>
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
)(Platea)