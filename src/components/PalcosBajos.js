import React from 'react';

const PalcosBajos = ({data}) => {
  data = data[3].types
  return (
    <ul className="PalcosBajos">
      {
        data.map((element, index) =>
          <li className="List-PalcoBajo" key={index}>
            {element}
          </li>
        )
      }
    </ul>
    )
}


export default PalcosBajos