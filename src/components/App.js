import React from 'react';
import Platea from './Platea'

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
    <Platea Plateas={PlatAB} />
  </div>
)

export default App
