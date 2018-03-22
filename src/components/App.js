import React from 'react';
import { connect } from 'react-redux';
import AppBuyTicket from './appBuyTicket';
import SelectSeat from './SelectSeat';

const App = ({ paginaActual,navigateTo }) => {
    switch (paginaActual) {
      case 'pagina-1':
        return <SelectSeat
          />
      case 'pagina-2':
        return <AppBuyTicket 
        navigateTo={navigateTo}/>
      default:
        break;
    }
    return null
  }
  
  const mapStateToProps = ({ paginaActual }) => ({
    paginaActual
  });
  
  const mapDispatchToProps = (dispatch) => ({
    navigateTo: (pagina) => {
      dispatch({
        type: 'NAVIGATE_TO',
        pagina
      })
    }
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);