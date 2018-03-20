import React from 'react'

const Galeria = ({ data }) => {
  data = data[1].types
  return (
    <ul>
      {
        data.map((element, index) =>
          <li key={index}>
            {element}
          </li>
        )
      }
    </ul>)
}

export default Galeria