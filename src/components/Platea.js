import React from 'react';

const Platea = ({data}) => {
  data = data[4].types
  return (
    <ul className="Platea">
      {
        data.map((element, index) =>
          <li className="List-platea" key={index}>
            {element}
          </li>
        )
      }
    </ul>
    )
}
export default Platea