import React from 'react';

const PalcosBajos = ({PalcoBajos}) => (
    <ul className="PalcosBajos">
      {PalcoBajos.map((PalcoBajo,index) => 
         <li className="list-palcoBajo" key={index}>
            {PalcoBajo.name}
         </li>
      )} 
  </ul>
)

export default PalcosBajos