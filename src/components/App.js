import React from 'react';
import PalcosBajos from './PalcosBajos';

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
    <PalcosBajos PalcoBajos={PBajos}/>
  </div>
)

export default App
