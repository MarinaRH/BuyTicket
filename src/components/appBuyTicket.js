import React from 'react';
import Cazuela from './Cazuela'
import Galeria from './Galeria'
import PalcosAltos from './PalcosAltos'
import PalcosBajos from './PalcosBajos'
import Platea from './Platea'

const data = [{
  name: 'GALERIA VISIBIL',
  description: 'Visib. Restringida',
  nivel: '3ER'
},
{
  name: 'GALERIA BUENA',
  description: 'VISIBILIDAD',
  nivel: '3ER'
},
{
  name: 'GALERIA VISIBIL',
  description: 'Visib. Restringida',
  nivel: '3ER'
}]


const PAltos = [{
  name: 'PALCOS ALTOS',
  description: '300mtrs',
  nivel: 3
}]

const PBajos = [{
  name: 'PALCOS BAJOS',
  description: '',
  nivel: 2
},
{
  name: '',
  description: '',
  nivel: 2
},
{
  name: 'PALCOS BAJOS',
  description: '',
  nivel: 2
}
]
const PlatAB=[
  {
  name:'PLATEA PREFERENCIAL',
  description:"1er Nivel",
  piso:1
  },
  {
  name:'PLATEA GENERAL',
  description:"1er Nivel",
  piso:1
  }
]

const AppBuyTicket = () => (
  <div>
    <Cazuela data = {data} />
    <Galeria data = {data} />
    <PalcosAltos PAltos={PAltos[0]}/>
    <PalcosBajos PalcoBajos={PBajos}/>
    <Platea Plateas={PlatAB} />
  </div>
)

export default AppBuyTicket
