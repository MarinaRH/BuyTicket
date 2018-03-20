import React from 'react';

const Platea = ({Plateas}) => (
  <ul classNmae="Plateas">
    {Plateas.map((platea,index) =>
      <li className="List-platea" key={index}>
         {platea.name}
      </li>

    )}
  </ul>

)
export default Platea