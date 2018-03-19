import React from 'react';
import Cazuela from './Cazuela';
import Galeria from './Galeria';

const data = [{
  name: 'CAZUELA ALTA',
  description: 'Visib. Restringida',
  nivel: '4TO'
},
{
  name: 'CAZUELA LATERAL',
  description: 'Visib. Restringida',
  nivel: '4TO'
},
{
  name: 'CAZUELA CENTRAL',
  description: 'Visib. Restringida',
  nivel: '4TO'
},
{
  name: 'CAZUELA LATERAL',
  description: 'Visib. Restringida',
  nivel: '4TO'
}]
const AppBuyTicket = () => (
  <div>
    <Cazuela data = {data} />
    <Galeria />
  </div>
)

export default AppBuyTicket
