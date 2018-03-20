import React from 'react';
import Cazuela from './Cazuela'
import Galeria from './Galeria'
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
const AppBuyTicket = () => (
  <div>
    <Cazuela data = {data} />
    <Galeria data = {data} />
  </div>
)

export default AppBuyTicket
