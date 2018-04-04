// import React from 'react';
// import { connect } from 'react-redux';

// const Cazuela = ({ data, seleccionarSeccion, navigateTo }) => {
//   data = data.cazuela
//   return (
//     <div></div>
    // <svg height="500" width="500">
    //   <path d="M150 5 L190 5 L160 70 L120 70 Z" fill="#A4C354"></path>
    //   <path d="M195 5 L305 5 L335 70 L165 70 Z" fill="#A4C354"></path>
    //   <path d="M310 5 L350 5 L380 70 L340 70 Z" fill="#A4C354"></path>
    // </svg>
    // <ul className="Cazuela">
    //   {
    //     data.map((element, index) =>
    //       <li className="List-Cazuela" key={index} onClick={() => { seleccionarSeccion(element), navigateTo('pagina-3') }}>
    //         {element.name}

    //       </li>
    //     )
    //   }
    // </ul>
//   )

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
// )(Cazuela)