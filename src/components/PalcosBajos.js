
import React from 'react';
import { connect } from 'react-redux'

const PalcosBajos = ({ data, seleccionarSeccion, navigateTo }) => {

  data = data.palcosBajos
  return (
    <g>
      <path d="M5 230 L160 210 L160 245 L5 265 Z" fill="#5B39C4" onClick={() => { navigateTo('pagina-3') }}></path>
      <path d="M495 230 L340 210 L340 245 L495 265 Z" fill="#5B39C4" onClick={() => { navigateTo('pagina-3') }}></path>
    </g>
    // <ul className="PalcosBajos">
    //   {
    //     data.map((element,index) =>
    //       <li className="List-PalcoBajo" key={index} onClick={()=> {seleccionarSeccion(element),navigateTo('pagina-3')}}>
    //         {element.name}
    //       </li>
    //     )
    //   }
    // </ul>
  )
}
// import React from 'react';
// import {connect} from 'react-redux'

// const PalcosBajos = ({data, seleccionarSeccion, navigateTo}) => {
  
//   data = data.palcosBajos
//   return (
//     <ul className="PalcosBajos">
//       {
//         data.map((element,index) =>
//           <li className="List-PalcoBajo" key={index} onClick={()=> {seleccionarSeccion(element),navigateTo('pagina-3')}}>
//             {element.name}
//           </li>
//         )
//       }
//     </ul>
//     )
// }


// export default connect(
//   (state) => ({


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
)(PalcosBajos)

//   }),
//   (dispatch) => ({
//     seleccionarSeccion(seccion) {
//       dispatch({type: 'SELECCIONAR_SECCION',seccion})
//     },
//     navigateTo: (pagina) => {
//       dispatch({
//         type: 'NAVIGATE_TO',
//         pagina
//       })
//     }
//   })
// )(PalcosBajos)

