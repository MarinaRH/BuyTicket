import React from 'react';
import Cazuela from './Cazuela'
import Galeria from './Galeria'
import PalcosAltos from './PalcosAltos'
import PalcosBajos from './PalcosBajos'
import Platea from './Platea'

const data = [{ id: 'CAZ', name: 'CAZUELA', types: ['ALTA', 'LATERAL DERECHO', 'CENTRAL', 'LATERAL IZQUIERDO'], level: 4 },
{ id: 'GAL', name: 'GALERIA', types: ['BUENA', 'VISIBLE DERECHO', 'VISIBLE IZQUIERDO'], level: 3 },
{ id: 'PAA', name: 'PALCOS', types: ['ALTOS'], level: 2 },
{ id: 'PAB', name: 'PALCOS', types: ['BAJO DERECHO', 'BAJO IZQUIERDO'], level: 1 },
{ id: 'PLA', name: 'PLATEA', types: ['GENERAL', 'PREFERENCIAL'], level: 1 }
]

const AppBuyTicket = () => (
  <div>
    <Cazuela data={data} />
    <Galeria data={data} />
    {/* <Galeria data={data} />
    <PalcosAltos PAltos={PAltos[0]} />
    <PalcosBajos PalcoBajos={PBajos} />
    <Platea Plateas={PlatAB} /> */}
  </div>
)

export default AppBuyTicket
