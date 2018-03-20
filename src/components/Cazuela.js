import React from 'react';

const Cazuela = ({ data }) => {
  data = data[0].types
  return (
    <ul>
      {
        data.map((element, index) =>
          <li key={index}>
            {element}
          </li>
        )
      }
    </ul>
  )

}

export default Cazuela