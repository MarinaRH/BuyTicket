import React from 'react'
import Header from './Header'
import Aside from './Aside'
import { connect } from 'react-redux';

const SelectSeat = ({navigateTo}) => (
  <div>
    <Header/>
    <Aside/>
    <main className="Center selectSeat">
    <button className="Btnzoom left"onClick={()=> {navigateTo('pagina-2')}}><img className="Img-review" src="https://thumb.ibb.co/nNO7LS/1486348529_back_backwards_repeat_arrows_arrow_80455.png"/></button>
      <h2>SELECCIONA TUS ASIENTOS</h2><br/><br/>
      <div className="Center Asientos">
        <table>
          <tr>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
          </tr>
          <tr>
            <td></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
          </tr>
          <tr>
            <td ></td>
            <td ></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
          </tr>
          <tr>
            <td></td>
            <td ></td>
            <td ></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
          </tr>
        </table>
      </div><br/><br/>
      <div className="Leyenda">
        <div className="Disponibles"></div> DISPONIBLES<br/><br/>
        <div className="Ocupados"></div> OCUPADOS<br/><br/>
        <div className="Center">
          <button className="Btnselect">COMPRAR </button>
        </div>
      </div>
      
    </main>
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