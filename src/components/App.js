import React from 'react';
import PalcosAltos from './PalcosAltos';
import PalcosBajos from './PalcosBajos';
import Platea from './Platea';

const PalcoAltos = [{
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

const App = () => (
  <div>
    <PalcosAltos PAltos={PalcoAltos[0]}/>
    <PalcosBajos PalcoBajos={PBajos}/>
    <Platea Plateas={PlatAB} />
    </div>
)

export default App
