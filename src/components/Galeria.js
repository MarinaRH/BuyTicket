import React from 'react'
import { connect } from 'react-redux'

const Galeria = ({ data, seleccionarSeccion, navigateTo }) => {
  data = data.galeria
  return (

    <g>
      <path d="M5 140 L120 115 L180 115 L190 130 L110 135 L120 150 L5 175 Z" fill="#EFB635" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M185 115 L315 115 L305 133 L382 138 L365 150 L125 150 L115 138 L195 133 Z" fill="#EFB635" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M495 140 L380 115 L320 115 L310 130 L390 135 L370 150 L495 175 Z" fill="#EFB635" onClick={() => { navigateTo('pagina-3') }}></path>
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
)(Galeria)