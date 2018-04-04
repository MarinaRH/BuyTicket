import React from 'react'
import { connect } from 'react-redux'

const Galeria = ({ data, seleccionarSeccion, navigateTo }) => {
  // data = data.galeria
  return (
    <svg height="500" width="500" >
      <path d="M150 5 L190 5 L160 70 L120 70 Z" fill="#A4C354" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M195 5 L305 5 L335 70 L165 70 Z" fill="#A4C354" className="buts" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M310 5 L350 5 L380 70 L340 70 Z" fill="#A4C354" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      {/* <!-- BUTACA 2 --> */}

      <path d="M5 95 L120 80 L170 80 L180 105 L120 105 L5 130 Z" fill="#A4C354" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M175 80 L325 80 L315 105 L185 105 Z" fill="#A4C354" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M495 95 L380 80 L330 80 L320 105 L380 105 L495 130 Z" className="buts"  fill="#A4C354" onClick={() => { navigateTo('pagina-3') }}></path>
      {/* <!-- butaca3 --> */}
      <path d="M5 140 L120 115 L180 115 L190 130 L110 135 L120 150 L5 175 Z" fill="#EFB635" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M185 115 L315 115 L305 133 L382 138 L365 150 L125 150 L115 138 L195 133 Z" fill="#EFB635" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M495 140 L380 115 L320 115 L310 130 L390 135 L370 150 L495 175 Z" fill="#EFB635" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      {/* <!-- butaca4 --> */}
      <path d="M5 185 L120 160 L370 160 L495 185 L495 220 L370 200 L120 200 L5 220 Z" fill="#E5842C" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      {/* <!-- butaca5 --> */}
      <path d="M5 230 L160 210 L160 245 L5 265 Z" fill="#8168D1" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M495 230 L340 210 L340 245 L495 265 Z" fill="#8168D1" className="buts" onClick={() => { navigateTo('pagina-3') }}></path>
      {/* <!-- butaca6 --> */}
      <path d="M110 260 L180 260 L140 320 L60 320" fill="#1955A4" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M185 260 L315 260 L355 320 L145 320" fill="#1955A4" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M390 260 L320 260 L360 320 L440 320" fill="#1955A4" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>

      <path d="M60 325 L140 325 L110 370 L20 370" fill="#1955A2" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M145 325 L355 325 L385 370 L115 370" fill="#1955A2" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M440 325 L360 325 L390 370 L480 370" fill="#1955A2" className="buts"  onClick={() => { navigateTo('pagina-3') }}></path>

    </svg>
    // <ul className="Galeria">
    //   {
    //     data.map((element, index) =>
    //       <li className="List-Galeria" key={index} onClick={()=> {seleccionarSeccion(element),navigateTo('pagina-3')}}>
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
)(Galeria)