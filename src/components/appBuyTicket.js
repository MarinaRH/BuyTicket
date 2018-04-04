import React from 'react';
// import Cazuela from './Cazuela'
import Galeria from './Galeria'
// import PalcosAltos from './PalcosAltos'
// import PalcosBajos from './PalcosBajos'
// import Platea from './Platea'
import Header from './Header'
import Aside from './Aside'
import { connect } from 'react-redux'
import dataBuyTicket from '../buyTicket.json'

const AppBuyTicket = ({ navigateTo }) => (
  <div>
    <Header />
    <Aside />
    <main className=" Main-Buy">
      <div>
        <button className="Btnzoom" onClick={() => { navigateTo('pagina-1') }}><img className="Img-review" src="https://thumb.ibb.co/nNO7LS/1486348529_back_backwards_repeat_arrows_arrow_80455.png" /></button>
        <button className="Btnzoom"><img className="Img-review" src="https://thumb.ibb.co/huwDS7/800998.png" /></button>
        <button className="Btnzoom"><img className="Img-review" src="https://thumb.ibb.co/cEG8un/54426.png" /></button><br /><br />
      </div>
      <h1 className="Center">SELECCIONA PISO</h1>
      <br/>
      <div className="Leyend">
         <div className="cazuela"></div><p className="text-leyend"> CAZUELA (ALTA-CENTRAL-LATERAL)</p>
         <div className="galeria"></div><p className="text-leyend"> GALERIA (BUENA-LATERAL)</p>
         <div className="palcosA"></div><p className="text-leyend"> PALCOS ALTOS</p>
         <div className="palcosB"></div><p className="text-leyend"> PALCOS BAJOS (LATERAL)</p>
         <div className="platea"></div><p className="text-leyend"> PLATEA (GENERAL-PREFERENCIAL)</p>
      </div>
      <div className="Center BuyTicket">
        <svg height="500" width="500" >
          <Cazuela data={dataBuyTicket} />
          <Galeria data={dataBuyTicket} />
          <PalcosAltos data={dataBuyTicket} />
          <PalcosBajos data={dataBuyTicket} />
          <Platea data={dataBuyTicket} />
          <div className="Escenario"><h2>Escenario</h2></div>
        </svg>
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

