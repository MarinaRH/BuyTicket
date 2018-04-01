import React from 'react'
import Header from './Header'
import Aside from './Aside'
import { connect } from 'react-redux';

const SelectSeat = ({navigateTo}) => (
  <div>
    <Header/>
    <Aside/>
    <main className="Center selectSeat">
      <h2>SELECCIONA TUS ASIENTOS</h2>
      <div className="Center Asientos">
        <table>
          <tr>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
          </tr>
          <tr>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
          </tr>
          <tr>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
            <td className="Site"></td>
          </tr>
          <tr>
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
        <div className="Ocupados"></div> OCUPADOS
      </div>
      <button className="Btnselect"
        onClick={() => navigateTo('pagina-2')}
        >VOLVER
      </button>
      <button className="Btnselect">
        COMPRAR
      </button>
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