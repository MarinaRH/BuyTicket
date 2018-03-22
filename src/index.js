import React from 'react';
import { render } from 'react-dom';
// import AppBuyTicket from './components/AppBuyTicket';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const reducer=(state,action)=>{

  switch (action.type) {
		case 'SELECCIONAR_SECCION':
			return {
				...state,
				seccionSeleccionada: action.seccion
			}
		case 'NAVIGATE_TO':
			return {
				...state,
				paginaActual: action.pagina
			}
		default:
			return state;
	}
//   if (action.type === 'SELECCIONAR_SECCION')
//    {
     
//     return {
//       ...state,
//       seccionSeleccionada: action.seccion
//     }
//   }
//   return state
};

const initialState = {
  seccion: '',
  paginaActual: 'pagina-2'
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)
