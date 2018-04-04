import React from 'react';
import Cazuela from './Cazuela'
import Galeria from './Galeria'
import PalcosAltos from './PalcosAltos'
import PalcosBajos from './PalcosBajos'
import Platea from './Platea'
import Header from './Header'
import Aside from './Aside'
import { connect } from 'react-redux'
import dataBuyTicket from '../buyTicket.json'

const AppBuyTicket = ({ navigateTo }) => (
  <div>
    <Header />
    <Aside />
    <main className="Main-home Main-Buy">
      <div>
        <button className="Btnzoom" onClick={() => { navigateTo('pagina-1') }}><img className="Img-review" src="https://thumb.ibb.co/nNO7LS/1486348529_back_backwards_repeat_arrows_arrow_80455.png" /></button>
        <button className="Btnzoom"><img className="Img-review" src="https://thumb.ibb.co/huwDS7/800998.png" /></button>
        <button className="Btnzoom"><img className="Img-review" src="https://thumb.ibb.co/cEG8un/54426.png" /></button><br /><br />
      </div>
      <h1 className="Center">SELECCIONA PISO</h1>
      <br /><br />
      <div className="Center BuyTicket">
        {/* <Cazuela data={dataBuyTicket} /> */}
        <Galeria data={dataBuyTicket} />
        {/* <PalcosAltos data={dataBuyTicket} />
        <PalcosBajos data={dataBuyTicket} />
        <Platea data={dataBuyTicket} /> */}
        <div className="Escenario"><h2>Escenario</h2></div>
      </div>
    </main>
  </div>
)
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
)(AppBuyTicket)

