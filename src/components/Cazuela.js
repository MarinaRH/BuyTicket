import React from 'react';

const Cazuela = ({ data }) => {
  data = data[0].types
  return (
    <ul className="Cazuela">
      {
        data.map((element, index) =>
          <li className="List-Cazuela" key={index}>
            {element}
          </li>
        )
      }
    </ul>
  )

}

export default Cazuela