import React from 'react';
import PalcosAltos from './PalcosAltos'

const PalcoAltos = [{
  name: 'PALCOS ALTOS',
  description: '300mtrs',
  nivel: 3
}]

const App = () => (
  <div>
    <PalcosAltos PAltos={PalcoAltos[0]}/>
  </div>
)

export default App
