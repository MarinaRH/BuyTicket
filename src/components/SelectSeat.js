import React from 'react'
import Header from './Header'
import Aside from './Aside'
import { connect } from 'react-redux';
import data from '../buyTicket.json'

const SelectSeat = ({ navigateTo }) => {
  // console.log()
  const circulo = '<circle cx="50" cy="50" r="5" style="fill:rgb(120,120,255)"></circle>';
  let cx = 20;
  let cy = 20;
  let circuloCant = '';

  function AddCirculo(arrButaca) {
    for (let i = 0; i < arrButaca.length; i++) {

      for (let j = 0; j < arrButaca[i].length; j++) {

        if (arrButaca[i][j] === '') {
          cx += 20;
        } else if (arrButaca[i][j] === false || arrButaca[i][j] === true) {
          circuloCant += '<circle  cy="' + cy + '" r="10" cx="' + cx + '" style="fill:#c3c3c3"><text x="' + cx + '" y="' + cy + '">' + (i + 1) + '</text></circle>'
          cx += 20
        }
      }
      circuloCant += '<text x="' + cx + '" y="' + cy + '">' + (i + 1) + '</text>';
      cx = 20;
      cy += 30
    }
    return { __html: circuloCant }
  }

  return (
    <div>
      <Header />
      <Aside />
      <main className="Center selectSeat">
        <button className="Btnzoom left" onClick={() => { navigateTo('pagina-2') }}><img className="Img-review" src="https://thumb.ibb.co/nNO7LS/1486348529_back_backwards_repeat_arrows_arrow_80455.png" /></button>
        <h2>SELECCIONA TUS ASIENTOS</h2><br /><br />
        <div className="Center Asientos " id="container">
          <svg dangerouslySetInnerHTML={AddCirculo(data.cazuela[1].butacas)}>
          </svg>
        </div><br /><br />
        <div className="Leyenda">
          <div className="Disponibles"></div> DISPONIBLES<br /><br />
          <div className="Ocupados"></div> OCUPADOS<br /><br />
          <div className="Center">
            <button className="Btnselect">COMPRAR </button>
          </div>
        </div>

      </main>
    </div>
  )
}

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