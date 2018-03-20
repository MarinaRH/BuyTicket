import React from 'react';

const PalcosAltos = ({data}) => {
  data = data[2].types
  return (
    <ul className="PalcosAltos">
      {
        data.map((element, index) =>
          <li className="List-PalcosAlto" key={index}>
            {element}
          </li>
        )
      }
    </ul>)
}

export default PalcosAltos