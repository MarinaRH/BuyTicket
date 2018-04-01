import React from 'react';
import Cazuela from './Cazuela'
import Galeria from './Galeria'
import PalcosAltos from './PalcosAltos'
import PalcosBajos from './PalcosBajos'
import Platea from './Platea'
import Header from './Header'
import Aside from './Aside'


const data = [
  { id: 'CAZ',
    name: 'CAZUELA', 
    types:[
      {name: 'ALTA', butacas: 14}, 
      {name: 'LATERAL DERECHO', butacas: 14},
      {name: 'CENTRAL', butacas: 14},
      {name: 'LATERAL IZQUIERDO', butacas: 14}],
    level: '4 NIVEL' },
  { id: 'GAL', 
    name: 'GALERIA', 
    types:[
      {name: 'BUENA', butacas: 24}, 
      {name: 'VISIBLE DERECHO', butacas: 24},
      {name: 'VISIBLE IZQUIERDO', butacas: 24}],
    level: '3 NIVEL'},
  { id: 'PAA', 
    name: 'PALCOS', 
    types: [
      {name:'ALTOS',butacas:55}],
      level: '2 NIVEL' },
  { id: 'PAB', 
    name: 'PALCOS',
    types: [
      {name:'BAJO DERECHO',butacas:32},
      {name:'BAJO IZQUIERDO',butacas:32}],
    level: '' },
  { id: 'PLA',
    name: 'PLATEA',
    types: [
      {name:'GENERAL',butacas:34},
      {name:'PREFERENCIAL',butacas:34}],
    level: '1 NIVEL' }
]

const AppBuyTicket = () => (
  <div>
    <Header />
    <Aside />
      <main className="Main-home">
        <div className="Center">
          <button className="Btnzoom">zoom +</button>
          <button className="Btnzoom">zoom -</button><br/><br/><br/>
        </div>
        <br/><br/>
        <div className="Center BuyTicket">
          <Cazuela data={data} />
          <Galeria data={data} />
          <PalcosAltos data={data} />
          <PalcosBajos data={data} />
          <Platea data={data} />
        </div>
      </main>
  </div>
)

export default AppBuyTicket
