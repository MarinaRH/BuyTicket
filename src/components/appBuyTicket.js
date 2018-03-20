import React from 'react';
import Cazuela from './Cazuela';

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
    <Cazuela data={data} />
  </div>
)

export default AppBuyTicket
