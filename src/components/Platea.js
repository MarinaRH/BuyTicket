// import React from 'react';
// import {connect} from 'react-redux'

// const Platea = ({data, seleccionarSeccion,navigateTo}) => {
//   data = data.platea
//   return (
//     <ul className="Platea">
//       {
//         data.map((element, index) =>
//           <li className="List-platea" key={index} onClick={()=> {seleccionarSeccion(element),navigateTo('pagina-3')}}>
//             {element.name}
//           </li>
//         )
//       }
//     </ul>
//     )
// }

// export default connect(
//   (state) => ({
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
// )(Platea)