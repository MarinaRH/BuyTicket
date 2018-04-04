// import React from 'react';
// import { connect } from 'react-redux'


const PalcosAltos = ({ data, seleccionarSeccion, navigateTo }) => {
  data = data.palcosAltos
  return (
    <g>
      <path d="M5 185 L120 160 L370 160 L495 185 L495 220 L370 200 L120 200 L5 220 Z" fill="#E5842C" onClick={() => { navigateTo('pagina-3') }}></path>
    </g>
    // <ul className="PalcosAltos">
    //   {
    //     data.map((element, index) =>
    //       <li className="List-PalcosAlto" key={index} onClick={() => { seleccionarSeccion(element), navigateTo('pagina-3') }}>
    //         {element.name}
    //       </li>
    //     )
    //   }
    // </ul>
  )
}
// const PalcosAltos = ({ data, seleccionarSeccion, navigateTo }) => {
//   data = data.palcosAltos
//   return (
//     <ul className="PalcosAltos">
//       {
//         data.map((element, index) =>
//           <li className="List-PalcosAlto" key={index} onClick={() => { seleccionarSeccion(element), navigateTo('pagina-3') }}>
//             {element.name}
//           </li>
//         )
//       }
//     </ul>)
// }


// export default connect(
//   (state) => ({

//   }),
//   (dispatch) => ({
//     seleccionarSeccion(seccion) {
//       dispatch({ type: 'SELECCIONAR_SECCION', seccion })
//     },
//     navigateTo: (pagina) => {
//       dispatch({
//         type: 'NAVIGATE_TO',
//         pagina
//       })
//     }
//   })
// )(PalcosAltos)