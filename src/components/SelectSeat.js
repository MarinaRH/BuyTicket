import React from 'react'
import { connect } from 'react-redux';

const SelectSeat = ({navigateTo}) => (
  <div className="Center">
  <button>Atras</button>
  <button>zoom +</button>
  <button>zoom -</button><br/>
  <div className="Asientos"></div><br/><br/>
  <span><div className="Disponibles"></div>Disponibles</span>
  <span><div className="Ocupados"></div>Ocupados</span><br/><br/>
  <button
    onClick={() => navigateTo('pagina-2')}
    >VOLVER</button>
  </div>
)

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    navigateTo: (pagina) => {
      dispatch({
        type: 'NAVIGATE_TO',
        pagina
      })
    }
  })
)(SelectSeat);