import React from 'react';
import PalcosAltos from './PalcosAltos';
import PalcosBajos from './PalcosBajos';

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

const App = () => (
  <div>
    <PalcosAltos PAltos={PalcoAltos[0]}/>
    <PalcosBajos PalcoBajos={PBajos}/>
  </div>
)

export default App
