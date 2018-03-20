import React from 'react';
import Cazuela from './Cazuela'
import Galeria from './Galeria'
import PalcosAltos from './PalcosAltos'
import PalcosBajos from './PalcosBajos'
import Platea from './Platea'
import SelectSeat from './SelectSeat'

const data = [{ id: 'CAZ', name: 'CAZUELA', types: ['ALTA', 'LATERAL DERECHO', 'CENTRAL', 'LATERAL IZQUIERDO'], level: 4 },
{ id: 'GAL', name: 'GALERIA', types: ['BUENA', 'VISIBLE DERECHO', 'VISIBLE IZQUIERDO'], level: 3 },
{ id: 'PAA', name: 'PALCOS', types: ['ALTOS'], level: 2 },
{ id: 'PAB', name: 'PALCOS', types: ['BAJO DERECHO', 'BAJO IZQUIERDO'], level: 1 },
{ id: 'PLA', name: 'PLATEA', types: ['GENERAL', 'PREFERENCIAL'], level: 1 }
]

const AppBuyTicket = () => (
  <div className="Center">
    <Cazuela data={data} />
    <Galeria data={data} />
    <PalcosAltos data={data} />
    <PalcosBajos data={data} />
    <Platea data={data} />
    <SelectSeat />
    
  </div>
)

export default AppBuyTicket
